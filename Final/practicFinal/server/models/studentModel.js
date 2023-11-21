let students = [{
    "studentId": "610001",
    "firstname": "John",
    "lastname": "Smith",
    "courses":
        [{
            "courseId": "CS303",
            "coursename": "Web Application Programming in JavaScript",
            "semester": "2021-Spring", "grade": 99
        },
        {
            "courseId": "CS445", "coursename":
                "Modern Asynchronous Programming",
            "semester": "2021-Spring", "grade": 95
        }]
},
{
    "studentId": "610002", "firstname": "Edward", "lastname": "Jack", "courses": [{
        "courseId": "CS472", "coursename": "Web Application Programming", "semester": "2021-Spring", "grade": 82
    },
    { "courseId": "CS544", "coursename": "Web Application Architecture", "semester": "2021-Spring", "grade": 88 }]
}];

module.exports = class Student {
    constructor(studentId, firstname, lastname, courses) {
        this.studentId = studentId,
            this.firstname = firstname;
        this.lastname = lastname;
        this.courses = courses;
    }
    save(stuId) {
        let stuExit = students.find(s => s.studentId == stuId);
        if (!stuExit) {
            throw new Error(`error: Student doesn't exist with this ID ${stuId}`);
        } else {
            let index = -1;
            let count = 0;
            stuExit.courses.forEach(p => {
                if (p.courseId == this.courses.courseId)
                    index = count;
                else count++;
            }
            );
            if (index > -1) {
                students.find(s => s.studentId == stuId).courses[index] = this.courses;

            }
            else {

                students.find(s => s.studentId == stuId).courses.push(this.courses);
            }
            return students.filter(s => s.studentId == stuId);
        }

    }
    static getStudentById(stuId) {
        console.log(students.filter(s => s.studentId == stuId));
        return students.filter(s => s.studentId == stuId);
    }

    static getStudentAvg(stuId, semeter) {
        var avg = 0;
        var arrCourse = [];
        console.log(semeter);
        if (semeter) {
           // console.log('c', courses);
            let courses = students.find(s => s.studentId == stuId).courses;
            console.log(courses);
            courses.forEach(s => {
                if (s.semester == semeter) {
                    arrCourse.push(s.grade);
                }
            });
            console.log(arrCourse);
            if (arrCourse.length == 0) {
                throw new Error(`average: couldn’t find semester ${semeter}`);
            }
            else {
                avg = arrCourse.reduce((cur, ele, index, arr) => cur + ele / arr.length, 0);
            }
        }
        else {
            let courses = students.find(s => s.studentId == stuId).courses;
            console.log('else', courses);
            avg = courses.map(c => c.grade).reduce((cur, ele, index, arr) => cur + ele / arr.length, 0);

        }
     
        return ('average: '+ avg);
    }
}
