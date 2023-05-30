//an object represents the eventual completion(or failure) of an asynch operation and its resulting value
//used to handle asynchronous operations

//Example:
// let promise = new Promise((resolve, reject) => {
//     let result = 11;

//     if(result>10){
//         resolve(result); // the promise gets resolved
//     }else {
//         reject('result is nopt greater than 10'); // the promise gets rejected
//     }
// });

//consume/execute the promise
// promise.then(
//     (result) => console.log('Result:', result),
//     (message) => console.log('Error:', message)
// );

// promise.catch(error => console.log('Error: ', error));
//OR 
// promise
// .then(result => console.log('Result:', result))
// .catch(error => console.log('Error: ', error));

// let delay = (milliseconds) => {
//     return new Promise((resolve =>
//         {
//             setTimeout(resolve, milliseconds);
//         })
// };

// delay(3000)
// .then(
//     () => console.log(`Promise resolved after ${milliseconds/1000} seconds`)
// );

let checkValue = (value) => {
    // checkValue function returns a promise object
    return new Promise((resolve, reject) => {
        if(value>=0){
            resolve('is positive');
        }else{
            reject('is negative');
        }


    }

    )
    
    //that checks whether the value is positive or negative
    //if the value is positive, resolve the promise
    //else, reject the promise
};

//make the function call here

checkValue(-6)
.then(value => console.log(`$(value)`, message))
.catch(error => console.log(`$(value)`, Error));


