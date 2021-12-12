const Student = require('../models/student'); 
const Group = require('../models/group');
const College = require('../models/college');

exports.updateStudents = (req, res, next)=>{
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
		res.write('<a href="/updateSingleStudent/'+student[i]._id+'">Update Me</a>')
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

exports.updateGroups = (req, res, next)=>{
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
		res.write('<a href="/updateSingleGroup/'+group[i]._id+'">Update Me</a>')
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

exports.updateColleges = (req, res, next)=>{
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
		res.write('<a href ="/updateSingleCollege/'+college[i]._id+'">Update Me</a>')
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

exports.getUpdateStudent = (req, res, next)=>{
	const studentId = req.params.studentId;
	
	Student.findOne({_id: studentId})
	.then((student)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Students Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1><center>Student Update Form</center> </H1><br><br>');
		res.write('<form action ="/updateSingleStudent/'+student._id+'" method ="POST"');
		res.write('<label for="name">Name</label><br>');
		res.write('<input type ="text" value = "'+student.std_name+'" id = "name" name ="name"><br><br>');
		res.write('<label for="code">Code</label><br>');
		res.write('<input type ="text" value = "'+student.std_code+'" id = "code" name ="code"><br><br>');
		res.write('<label for="status">Status</label><br>');
		res.write('<input type ="boolean" value = "'+student.status+'" id = "status" name ="status"><br><br>');
		res.write('<label for="grpId">Group Id</label><br>');
		res.write('<input type ="text" value = "'+student.grp_id+'" id = "grpId" name ="grpId"><br><br>');
		res.write('<pre><button type="submit" id ="SUBMIT">SAVE CHANGES</button> <button type ="reset" id ="reset">RESET</button></pre> ');
		res.write('</form>');
		res.write('</body></html>');
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	})
};

exports.getUpdateGroup = (req, res, next)=>{
	const groupId = req.params.groupId;
	
	Group.findOne({_id: groupId})
	.then((group)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Groups Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1><center>Group Update Form</center> </H1><br><br>');
		res.write('<form action ="/updateSingleGroup/'+group._id+'" method ="POST"');
		res.write('<label for="name">Name</label><br>');
		res.write('<input type ="text" value = "'+group.grp_name+'" id = "name" name ="name"><br><br>');
		res.write('<label for="code">Code</label><br>');
		res.write('<input type ="text" value = "'+group.grp_code+'" id = "code" name ="code"><br><br>');
		res.write('<label for="status">Status</label><br>');
		res.write('<input type ="boolean" value = "'+group.status+'" id = "status" name ="status"><br><br>');
		res.write('<label for="clgId">College Id</label><br>');
		res.write('<input type ="text" value = "'+group.clg_id+'" id = "clgId" name ="clgId"><br><br>');
		res.write('<pre><button type="submit" id ="SUBMIT">SAVE CHANGES</button> <button type ="reset" id ="reset">RESET</button></pre> ');
		res.write('</form>');
		res.write('</body></html>');
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	})
};

exports.getUpdateCollege = (req, res, next)=>{
	const collegeId = req.params.collegeId;
	
	College.findOne({_id: collegeId})
	.then((college)=>{
		res.write('<HTML>');
		res.write('<HEAD><TITLE>Colleges Page</TITLE></HEAD>');
		res.write('<BODY>');
		res.write('<H1><center>College Update Form</center> </H1><br><br>');
		res.write('<form action ="/updateSingleCollege/'+college._id+'" method ="POST"');
		res.write('<label for="name">Name</label><br>');
		res.write('<input type ="text" value = "'+college.clg_name+'" id = "name" name ="name"><br><br>');
		res.write('<label for="code">Code</label><br>');
		res.write('<input type ="text" value = "'+college.clg_code+'" id = "code" name ="code"><br><br>');
		res.write('<label for="status">Status</label><br>');
		res.write('<input type ="boolean" value = "'+college.status+'" id = "status" name ="status"><br><br>');
		res.write('<pre><button type="submit" id ="SUBMIT">SAVE CHANGES</button> <button type ="reset" id ="reset">RESET</button></pre> ');
		res.write('</form>');
		res.write('</body></html>');
		return res.end();
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	})
};

exports.postUpdateStudent = (req, res, next)=>{
	const studentId = req.params.studentId;

	const name = req.body.name;
	const status = req.body.status;
	const grpId = req.body.grpId;
	const code = req.body.code;

	
 
	Student.findOne({_id: studentId})
	.then((student)=>{
		student.std_name = name;
		student.status = status;
		student.grp_id = grpId;
		student.std_code = code;
		return student.save(); 
	})
	.then((result)=>{
		console.log("Updation Successful");
		res.redirect('/updateStudents');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	})
};

exports.postUpdateGroup = (req, res, next)=>{
	const groupId = req.params.groupId;

	const name = req.body.name;
	const status = req.body.status;
	const clgId = req.body.grpId;
	const code = req.body.code;

	
 
	Group.findOne({_id: groupId})
	.then((group)=>{
		group.grp_name = name;
		group.status = status;
		group.clg_id = clgId;
		group.grp_code = code;
		return group.save(); 
	})
	.then((result)=>{
		console.log("Updation Successful");
		res.redirect('/updateGroups');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	})
};

exports.postUpdateCollege = (req, res, next)=>{
	const collegeId = req.params.collegeId;
	console.log(req.body);

	const name = req.body.name;
	const status = req.body.status;
	const code = req.body.code;

	
 
	College.findOne({_id: collegeId})
	.then((college)=>{
		college.clg_name = name;
		college.status = status;
		college.clg_code = code;
		return college.save(); 
	})
	.then((result)=>{
		console.log("Updation Successful");
		res.redirect('/updateColleges');
	})
	.catch((err)=>{
		console.log(err);
		const error = new Error(err); 
		error.httpStatusCode = 500;  
		next(error)
	});
};