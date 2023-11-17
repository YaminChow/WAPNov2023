function Students(fName, lName) {
    this.firstname = fName;
    this.lastname = lName;
    this.grade = [];
}

Students.prototype.inputNewGrade = function (newGrade) {
    this.grade.push(newGrade);
}

Students.prototype.computeAverage = function () {
    return this.grade.reduce((accm, elem, index, arr) => accm  + elem/arr.length,0);
}

let stu1 = new Students('John', 'Smith');
stu1.inputNewGrade(90);
stu1.inputNewGrade(90);
stu1.inputNewGrade(90);
stu1.inputNewGrade(90);
let avg = stu1.computeAverage();
console.log(stu1.firstname, stu1.lastname, avg);

let stu2 = new Students('Cherry', 'Brown');
stu2.inputNewGrade(90);
stu2.inputNewGrade(87);
stu2.inputNewGrade(88);
stu2.inputNewGrade(84);
avg = stu2.computeAverage();
console.log(stu2.firstname, stu2.lastname, avg);

let stu3 = new Students('Amy', 'Pink');
stu3.inputNewGrade(98);
stu3.inputNewGrade(87);
stu3.inputNewGrade(88);
stu3.inputNewGrade(90);
avg = stu3.computeAverage();
console.log(stu3.firstname, stu3.lastname, avg);



function Rabbit(){
    Rabbit.prototype ={constructor: Rabbit};
}
let rabbit = new Rabbit.constructor('White');
let rabbit2 = new rabbit.constructor('Black');
console.log('Rabbit',rabbit.constructor===Rabbit.constructor);