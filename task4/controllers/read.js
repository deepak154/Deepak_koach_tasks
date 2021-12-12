const Student = require('../models/student'); 
const Group = require('../models/group');
const College = require('../models/college');

exports.readAllGroups = (req,res,next) => {
	Group.find()
	.then((group)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Groups Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<ul><H1>List Of All Groups </H1><br>');
		for(i = 0; i<group.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ group[i].grp_id +" * "+ ' <a href ="/readSingleGroup/'+group[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +group[i].grp_name + " " + '</h4>');
		res.write('</li>');
		}
		res.write('</ul>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};

exports.readSingleGroup = (req, res, next) => {
	
	const groupId = req.params.groupId;

	Group.findById(groupId) 
	.then((group)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Groups Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1> GROUP DETAILS </h1><br><br>');
		res.write(' <h4> Name: ' +group.grp_name + '</h4>');
		res.write(' <h4> Group Id: ' +group.grp_id + '</h4>');
		res.write(' <h4> Group Code: ' +group.grp_code + '</h4>');
		res.write(' <h4> Status: ' +group.status + '</h4>');
		res.write(' <h4> Clg_Id: ' +group.clg_id + '</h4>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};

exports.readAllStudents = (req, res, next) => {
	Student.find()
	.then((student)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Students Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<ul><H1>List Of All Students </H1><br>');
		for(i = 0; i<student.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ student[i].std_id +" * "+ ' <a href ="/readSingleStudent/'+student[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +student[i].std_name + " " + '</h4>');
		res.write('</li>');
		}
		res.write('</ul>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};

exports.readSingleStudent = (req, res, next) => {
	
	const studentId = req.params.studentId;

	Student.findById(studentId) 
	.then((student)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Students Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1> STUDENT DETAILS </h1><br><br>');
		res.write(' <h4> Name: ' +student.std_name + '</h4>');
		res.write(' <h4> Student Id: ' +student.std_id + '</h4>');
		res.write(' <h4> Student Code: ' +student.std_code + '</h4>');
		res.write(' <h4> Status: ' +student.status + '</h4>');
		res.write(' <h4> Group_Id: ' +student.grp_id + '</h4>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};

exports.readAllColleges = (req,res,next) => {
	College.find()
	.then((college)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Colleges Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<ul><H1>List Of All Colleges </H1><br>');
		for(i = 0; i<college.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ college[i].clg_id +" * "+ ' <a href ="/readSingleCollege/'+college[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +college[i].clg_name + " " + '</h4>');
		res.write('</li>');
		}
		res.write('</ul>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};

exports.readSingleCollege = (req, res, next) => {
	
	const collegeId = req.params.collegeId;

	College.findById(collegeId) 
	.then((college)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Colleges Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1> COLLEGE DETAILS </h1><br><br>');
		res.write(' <h4> Name: ' +college.clg_name + '</h4>');
		res.write(' <h4> College Id: ' +college.clg_id + '</h4>');
		res.write(' <h4> College Code: ' +college.clg_code + '</h4>');
		res.write(' <h4> Status: ' +college.status + '</h4>');
		res.write('</BODY>');
		res.write('</HTML>')
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error);
	})
};
