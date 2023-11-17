// const user ={
//     fname : 'John',
//     greet: function(){
        
//         function setName(fname){
//             this.fname = fname;
//             console.log(this.fname)    
//         }
        
//     }
// }

// const user1 = {
//     fname: 'John',
//     greet: function () {
//         // function setName(fname) {
//         //     this.fname = fname;
//         //     console.log(this.fname);
//         // }

//         const setName=(name)=>{
//             this.fname = name;
//             console.log(this.fname)
//         };

//         setName('Hello');
//         // Use call or apply to set the value of this in setName
//         //setName.call(this, 'Edward');
//         // or
//         //setName.apply(this, ['NewName']);
//     }
// };

// user1.greet();
// console.log(user1.fname);


const me ={
    fname: 'John',
    lname: 'Smith',
    getFullName: function(){
        return this.fname+' '+this.lname;
    }
}
const log=function(height, weight){
    console.log(this.getFullName(),height,weight);
}
const logMe = log.bind(me);
log.apply(me,['220','190']);

const u = {
    salute : "",
    greet: function(){
        this.salute ="hello";
        //console.log(this.salute);
        //const self = this;
        const setFrech= function(greeding){
            this.salute = greeding;
            console.log(this.salute);
        }
       // setFrech.apply(this,['Bonjour']);
        setFrech.bind(this,'Mingalarpar')();
        console.log(this.salute);
    }
}
u.greet();

let group ={
    title: 'Our Group',
    students :['John','JJ','GG'],
    showList: function(){
        //const self = this;
        this.students.forEach((stu)=>{
            (function(stu){
                console.log(this.title,': ',stu);
            }).apply(this,[stu]);    
        });
    }
};
group.showList();

let group1={
    title: 'Our group',
    students:['John','GG','FF'],
    showList: function(){
        this.students.forEach((stu)=>{
            (function(stu){
                console.log(this.title,': ',stu);
            }).call(this,stu);
        });        
    }
};
group1.showList();

let group2 = {
    title :'Our title',
    Students: ['AA','BB','CC'],
    showList: function(){
        this.Students.forEach(function(stu)
        {
            console.log(this.title,': ',stu);
        }.bind(this));
    }
};
group2.showList();
console.log("*********************");
(function(){
    "use strict";
    const x = {a:1, b:2, add(){return this.a + this.b}}
    console.log( x.add());  //3
    //debugger;
    const y = {a:1, b:2, 
        add : function(){return this.a + this.b}
    }

    console.log( y.add.bind(y)());
    console.log(y.add.apply(y));  //NaN
    console.log(y.add.call(y));
    }())

    const s ={
        a:1,
        b:2,
        add:function() {return this.a+this.b}
    }
    console.log(s.add.apply(s));