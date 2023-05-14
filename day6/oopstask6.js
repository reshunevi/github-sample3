//A person Class to hold all the details
// class Person{
//     constructor(name,age,gender,place){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//         this.place = place;
//     }
//     details(){
//         console.log(`My name is ${this.name}`);
//         console.log(`I am ${this.age} years old`);
//         console.log(`The details of the person: ${this.name}, ${this.age}, ${this.gender}, ${this.place}`);
//     }
// }
// const p = new Person("Shiv",25,"Male","MH");
// p.details();

//Class- Movie
// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.


// class Movie{
//     constructor(title,studio,rating){
//         this.title = title;
//         this.studio = studio;
//         this.rating = rating = function (){
//             if(rating == undefined)
//             return "PG"; 
//             else 
//             return rating;
            
//         }
//         ();
        
//         }
// }
// let Movie1 = new Movie('Casino Royale','Eon Productions','PG13'); 
// let Movie2 = new Movie('Ponniyin Selvan','Lyca Productions','G'); 
// let Movie3 = new Movie('Harry Potter','Warner Bros'); 
// console.log(Movie3.rating);


// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const CasinoRoyale = new Movie( "Casino Royal", "Eon Productions", "PG13");

// c)Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class movie{
    constructor(name,studio,rating){
        this.name = name;
        this.studio = studio;
        this.rating = rating;
    }
    
}
let Movie1 = new movie('Casino Royale','Eon Productions','PG13'); 
let Movie2 = new movie('Ponniyin Selvan','Lyca Productions','PG'); 
let Movie3 = new movie('Harry Potter','Warner Bros', 'PG'); 

var array = [Movie1, Movie2, Movie3];  

//the arr1 should return the movie with the rating PG

function filterMovie(newArr){
    let sum = 1;
    let arr1 = [];
    for(let e of newArr){
        sum = sum +e;
   
        if(this.rating == "PG")
        return arr1.push(this.name);
        
    }
    console.log(arr1);
    
}
filterMovie(array);
   