function editpost(postId) {
    //make ur request to get the post details based on the id click
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post=> {
        let editForm = document.querySelector(`#edit-post-form`);
        let editTitleInput = document.querySelector(`#edit-body`);
        let editBodyInput = document.querySelector(``)

        //display form
        editForm.getElementsByClassName.display = 'block';

        //set the values of the form from the api call data
        editTitleInput.value = post.title;
        editBodyInput.value = post.body;
        editpostId.value = post.id;
    });
}

function getPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(posts => {
        //get ref of the table
        let tableBody = document.querySelector('#posts-table tbody');

        //clear the table body
        tableBody.innerHTML = '';

        //create and add rows from api result
        posts.forEach(post =>{
            let row = document.createElement('tr');

            row.innerHTML = 
            `<td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>
            <td>
                <button onclick="editPost(${post.id})">Edit</button>
                <button onclick="deletePost(${post.id})">Delete</button>
            </td>`
            ;

            tableBody.appendChild(row);
        })

    });

}

async function createPost(event){
    event.preventDefault();

    // get the form elements

    let titleInput = document.querySelector('#title');
    let bodyInput = document.querySelector('#body');
}



let newPost = {
    title: titleInput.value,
    body: bodyInput.value,
    userId:1
}


try{
let postedJson = await fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
   headers: {
    'Content-type': 'application/json'
  },
  body: JSON.stringify(newPost),
});

let postedObject = await postedJson.json();

//clear the form elements
titleInput.value = '';
bodyinput.value = '';

console.log(postedObject);

console.log(postedObject);
}
catch (error){
    console.error(error);
}
 //create reference 
 let createPostForm = document.querySelector('#create-post-form');

//attach event listener
createPostForm.addEventListener('submit', createPost);

console.log(postedObject);

