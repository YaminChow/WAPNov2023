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
        this.studentarr = stud;            
    }
    
    scoreStudentBySid(studId){
        var retCount = 0;
        
        var studInfo = this.studentarr.filter(ele=> ele.studentId== studId);
        //console.log('Info: ', studInfo[0].answer);
        for(let s of studInfo[0].answer){
           // console.log('First ',s.questionId);
            for(let q of this.questions){
               // console.log ('in question loop',s.questionId, 'A Ques ', q[0]);
                if(s.questionId == q[1].questionId){
                   // console.log('Ques: ', s.answer, 'Hello ', q);
                    if(s.answer == q[1].answer){
                        retCount++;
                    }
                }        
                 
             }
        }     
        return retCount;
    }

    getAverageScore(){
        let avgScore = this.studentarr.map(ele => this.scoreStudentBySid(ele.studentId))
        .reduce((accu, elem)=> accu+ elem/this.studentarr.length,0);
        //console.log('Avg: ', avgScore);
        return avgScore;
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

let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5