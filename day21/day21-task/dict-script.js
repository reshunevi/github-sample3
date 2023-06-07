
var errorMessage = document.getElementById('errorMsg');
// errorMessage.style.visibility = "hidden";


async function dictDetails(word){
    try{
        let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        // get the meaning
        // parse the json to js object
        let data = await response.json();
        console.log(data);

        //select id and create paragraph
        let paragraph = document.getElementById('wordName');

        //create audio icon

        let audioSource = document.createElement('audio');
        //set src attribute
        audioSource.setAttribute("src", "url(data[0].phonetics[0].audio)");

        //append audioSource to paragraph
        paragraph.appendChild(audioSource);

        paragraph.innerHTML = `
        <span class='fas fa-volume-up audio-icon'></span>
        <audio class='audio'><source src=${audioSource} type='audio/mpeg'></audio>Word: <b>${data[0].word}</b>`;
        // let audioSource = data[0].phonetics[0].audio;   
        
        //create a click event
        document.querySelector('.audio-icon').addEventListener('click', event => {
            document.querySelector('.audio').play();
        });
           
        

        let dictDetails = document.getElementById('dictDetails');    
        let unOrderedList = document.createElement('ul');
        
        //display meaning
        let wordMeaning = data[0].meanings;
        for( let meaning of wordMeaning){
            
            let listItem = document.createElement('li');
            listItem.style.listStyleType = "none";
            
            listItem.innerHTML= meaning.partOfSpeech;
            
    
            let subList = document.createElement('ul');
            subList.style.listStyleType = 'disc';

            //display definitions
            let wordDef = meaning.definitions;
            for(definition of wordDef) {

                let subListItem = document.createElement('li');
                subListItem.innerHTML = definition.definition;
                subList.appendChild(subListItem);
            }
            listItem.appendChild(subList);

            unOrderedList.appendChild(listItem);
            listItem.style.fontStyle = "italic";
        }

       
        console.log(unOrderedList);
        dictDetails.appendChild(unOrderedList);

        }

     catch (error) {
        console.error('error fetching the dictionary api');

    }
}
function searchWord() {
    let word = document.getElementById('method').value;
    if(word == ""){
       errorMessage.style.display = "block";

    } else {
        dictDetails(word);
    }

}