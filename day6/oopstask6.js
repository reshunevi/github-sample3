//A person Class to hold all the details
class Person{
    constructor(name,age,gender,place){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.place = place;
    }
    details(){
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        console.log(`The details of the person: ${this.name}, ${this.age}, ${this.gender}, ${this.place}`);
    }
}
const p = new Person("Shiv",25,"Male","MH");
p.details();