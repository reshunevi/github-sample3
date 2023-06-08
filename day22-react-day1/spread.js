// spread operator

// ...
// let numbers = [1, 2, 3];

// let moreNumbers = [...numbers, 4, 5, 6];

// console.log(numbers);
// console.log(...numbers);
// console.log(moreNumbers);

//merge two arrays

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let cominedArray = [...array1, ...array2];
// console.log(cominedArray);

// shallow copy and deep copy
let array1 = [1,2,3];
//shallow
// let array2 = array1;

//deep
let array2 = [...array1];
array1[0] = 10;
array2[1] = 20;
console.log(array1);
console.log(array2);