const stuModel = require('../models/studentModel');

exports.saveCourse =((req,res)=>
{    
    const stu = new stuModel(req.params.studentId,null,null,req.body);        
   // stu.save(req.params.studentId);
   // res.status(200).json(stuModel.getStudentById(req.params.studentId));    
   res.status(200).json(stu.save(req.params.studentId));
});

exports.getStudent =((req,res)=>{
    res.json(stuModel.getStudentById(req.params.studentId));
})

exports.getAvg = ((req,res)=>{
    console.log(req.params.studentId,req.query.semester);
    res.json(stuModel.getStudentAvg(req.params.studentId,req.query.semester));
});