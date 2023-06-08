class Student {
    constructor() {
        this.name = 'Guest';
        this.geekPoints = 100;




    }
}

let student101 = new Student();
let student102 = new Student();

student101.name = 'krish';

console.log(student101);
console.log(student102);

module.export(Student);