class Student{
    constructor(stuId){
        this.studentId = stuId;
        this.answer = [];
    }
    addAnswer(question){
        if (question instanceof Question) {
            this.answer.push(question);
        }
    }
}
class Question{
    constructor(quesId, ans){
        this.questionId = quesId;
        this.answer = ans;
    }
    checkAnswer(stuanswer){
        if(this.answer ===stuanswer){
            return true;
        }
        else return false;
    }

}
class Quiz{
    constructor(ques,stud){
        this.questions = new Map();
        ques.forEach(element => {
            this.questions.set(element.questionId,element);
            
        });
        this.students = stud;
    }
    
    scoreStudentBySid(studId){
        var retCount = 0;
        let std = this.students.filter(ele => ele.studentId === studId).reduce((acc, std) => std, {});
        console.log(this.students[0].studentId);        
        for(let i = 0; i < this.students;i++){
            
            if(studId === this.students[i].studentId){
                console.log('true',this.students[i].studentId); 
                for(let j =0; j <this.questions;j++){
                    if(this.students[i].questionId=== this.questions[j].questionId){
                        if(this.students[i].answer ===this.questions[j].answer){
                            retCount
                        }

                    }
                }
            }
        }
        return retCount;
    }
}
const student1 = new Student(10);
student1.addAnswer(new Question(2, 'a'));
student1.addAnswer(new Question(3, 'b'));
student1.addAnswer(new Question(1, 'b'));
const student2 = new Student(11);
student2.addAnswer(new Question(3, 'b'));
student2.addAnswer(new Question(2, 'a'));
student2.addAnswer(new Question(1, 'd'));
const students = [student1, student2];
const questions =[new Question(1, 'b'), new Question(2, 'a'), new Question(3, 'b')];
const quiz = new Quiz(questions, students);

let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2