const Student = require('../models/student'); 
const Group = require('../models/group');
const College = require('../models/college');

exports.deleteStudents = (req, res, next)=>{
	Student.find()
	.then((student)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Students Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1>Click Below Button to delete All Students</h1>');
		res.write('<FORM action = "/deleteAllStudents" method = "POST" ><button type = "SUBMIT">Delete All Students</Button></form>');
		res.write('<ul><H1>List Of All Students </H1><br>');
		for(i = 0; i<student.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ student[i].std_id +" * "+ ' <a href ="/readSingleStudent/'+student[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +student[i].std_name + " " + '</h4>');
		res.write('<FORM action="/deleteSingleStudent/'+student[i]._id+'" method = "POST"><button type = "SUBMIT">Delete Me</button></form>')
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
		next(error)
	})
};

exports.deleteGroups = (req, res, next)=>{
	Group.find()
	.then((group)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Groups Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1>Click Below Button to delete All Groups</h1>');
		res.write('<FORM action = "/deleteAllGroups" method = "POST" ><button type = "SUBMIT">Delete All groups</Button></form>');
		res.write('<ul><H1>List Of All Groups </H1><br>');
		for(i = 0; i<group.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ group[i].grp_id +" * "+ ' <a href ="/readSingleGroup/'+group[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +group[i].grp_name + " " + '</h4>');
		res.write('<FORM action="/deleteSingleGroup/'+group[i]._id+'" method = "POST"><button type = "SUBMIT">Delete Me</button></form>')
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
		next(error)
	})
};

exports.deleteColleges = (req, res, next)=>{
	College.find()
	.then((college)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Colleges Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1>Click Below Button to delete All Colleges</h1>');
		res.write('<FORM action = "/deleteAllColleges" method = "POST" ><button type = "SUBMIT">Delete All colleges</Button></form>');
		res.write('<ul><H1>List Of All Colleges </H1><br>');
		for(i = 0; i<college.length; i++){
		res.write('<li>');
		res.write('<H6> ID: * '+ college[i].clg_id +" * "+ ' <a href ="/readSingleCollege/'+college[i]._id+'" >View Details</a> </h6>');
		res.write(' <h4> Name: ' +college[i].clg_name + " " + '</h4>');
		res.write('<FORM action="/deleteSingleCollege/'+college[i]._id+'" method = "POST"><button type = "SUBMIT">Delete Me</button></form>')
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
		next(error)
	})
};

exports.deleteAllStudents = (req, res, next) => {
	Student.deleteMany()
	.then((result)=>{
		console.log("Deletion Successful");
		res.redirect('/');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});
};

exports.deleteAllGroups = (req, res, next) => {
	Group.deleteMany()
	.then((result)=>{
		console.log("Deletion Successful");
		res.redirect('/');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});
};
exports.deleteAllColleges = (req, res, next) => {
	College.deleteMany()
	.then((result)=>{
		console.log("Deletion Successful");
		res.redirect('/');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});
};

exports.deleteSingleStudent = (req, res, next)=>{
	const studentId = req.params.studentId;
	Student.deleteOne({_id: studentId})
	.then((student)=>{
		console.log(student);
		res.redirect('/deleteStudents');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});
};

exports.deleteSingleGroup = (req, res, next)=>{
	const groupId = req.params.groupId;
	Group.findByIdAndRemove(groupId)
	.then((doc)=>{
		console.log(doc);
		res.redirect('/deleteGroups');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});

};

exports.deleteSingleCollege = (req, res, next)=>{
	const collegeId = req.params.collegeId;
	College.findByIdAndRemove(collegeId)
	.then((doc)=>{
		console.log(doc);
		res.redirect('/deleteColleges');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});

};

