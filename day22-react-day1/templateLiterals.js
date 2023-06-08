// template literals

// let name = 'Varghese' ;
// let age = 25;
// let message = `hello, my name is ${name} amd my age is ${age}`;
// console.log(message);

//multi-line strings
let header = 'template literals';
let items = ['Apple', 'orange', 'mango'];
let html =`
<h2>${header}</h2>
<ul>
`;

for (let item of items) {
    html += `<li>${item}</li>`;
}

html += '<ul>';
console.log(html);

