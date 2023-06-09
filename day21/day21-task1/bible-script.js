

//fetch function

async function displayBible(nameOfBook, nameOfChapter, nameOfVerse) {
    try {
        let response = await fetch(`https://bible-api.com/${nameOfBook} ${nameOfChapter}:${nameOfVerse}`);
        // get the data
        // parse the json to js oject
        let data = await response.json();
        console.log(data);

        //select id and create paragraph
        let displayBibleInfo = document.getElementById("bookInfo");
        let title = document.createElement('p');
        title.style.color = "#fff";
        let unorderedList = document.createElement('ul');

        let bookName = data.reference;

  
        title.innerHTML = bookName;

        for(let verse of data.verses){
            

            let listItem = document.createElement('li');
            listItem.style.listStyleType = 'disc';
            console.log(verse.text);
            listItem.innerHTML = `<li>Book Name: ${verse.book_name} </li> <li>Book Chapter: ${verse.chapter}</li><li>Verse Text: ${verse.text} </li>`
            unorderedList.appendChild(listItem);

        }
        displayBibleInfo.appendChild(title);
        displayBibleInfo.appendChild(unorderedList);
        


    } catch (error){
        console.error('error fetching the api');
    }

}

//click function

function clickBtn() {
    //if valid input call fetch function
    let book = document.getElementById('book').value;
    let chapter = document.getElementById('chapter').value;
    let verse = document.getElementById('verse').value;

    if(book == "" || chapter == "" || verse == "" ){
        alert('Enter details');
                        
    } else {
        
        displayBible(book, chapter, verse);
    }
}

