let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ": " + student);
        });
    }
};
//group.showList();

//1 solution using constant

let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const self= this;
        this.students.forEach(function (student) {
            console.log(self.title + ": " + student);
        });
    }
};
console.log("Solution 1");
group1.showList();

//solution 2 using arrow function
console.log("Solution 2");
let group2 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {        
        this.students.forEach( (student)=> {
            console.log(this.title + ": " + student
            );
        });
    }
};
group2.showList();

//solution 3 using call
console.log("Solution 3");
let group3 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }.call(this,std);
    });
    }
};
group3.showList();


//solution 4 using apply
console.log("Solution 4");
let group4 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }.apply(this,[std]);
    });
    }
};
group4.showList();


//solution 5 using binds
console.log("Solution 5");
let group5 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((std) => {
            return function (student) {
                console.log(this.title + ": " + student);
            }.bind(this,std)();
    });
    }
};
group5.showList();

