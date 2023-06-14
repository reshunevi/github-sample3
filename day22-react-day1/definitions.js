const PI = 3.14;

// module.exports = PI;

function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

module.exports = {
    PI,
    add,
    sub
};

// class Person {
//     constructor(name){
//         this.name = name;
//     }
// }sayHello() {
//     console.log(`Hello, ${name}!`);
// }

// module.exports = Person;