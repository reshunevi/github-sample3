//hoisting
// x = 10;
// console.log(x);
// var x;

// console.log(x);

// let x;

// ReferenceError: Cannot access 'x' before initialization

//loop
// for (let i = 0 ; i<= 10 ; i++){

// }
// console.log(i);
//ReferenceError: i is not defined

// for (var i = 0 ; i<= 10 ; i++){

// }
// console.log(i);
// o/p : 11

// let x = 10;
// if (true){
//     let x=20;
//     console.log(x);
// }
// console.log(x);
// o/p: 20
// 10
//inside function

// function func(){
//     let x = 2;
//     let y = 3;
// }
// console.log(x);
//ReferenceError: x is not defined

// let x = 2;
// let y = 3;
// function func(){
    
// }
// console.log(x+y);

// o/p: 5

//constants with arras and objects
// const array = [1,2,3,3,4];
// array[0] = 10;
// console.log(array);

const array = [1,2,3,4,5];
//splice
// array.splice(0,0,10);
// array.splice(2,0,7);

// array.splice(3, 1);
array.slice(3, 1)
console.log(array);

