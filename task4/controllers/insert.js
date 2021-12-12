const Student = require('../models/student'); 
const Group = require('../models/group');
const College = require('../models/college');

const path = require('path');
const fs = require('fs');

const rootDir = process.mainModule.filename;
const inputPath1 = path.join(rootDir,'../', 'input', 'koach_students_JSON1.json');
const inputPath2 = path.join(rootDir, '../', 'input', 'koach_groups_JSON2.json');
const inputPath3 = path.join(rootDir, '../', 'input', 'koach_colleges_JSON3.json');

//insert a single element form looped array data example
exports.postInsertFile1 = (req,res,next) =>{
	fs.readFile(inputPath1, (err, fileContent)=> {
			let inputFile1 = [];
			if(!err){    
				inputFile1 = JSON.parse(fileContent);
				for(i=0; i<inputFile1.length; i++){

				
					const stud = new Student({ ...inputFile1[i]});
					stud.save()
					.then((result)=>{  
						console.log("Insertion Succeesful");  
					})
					.catch((err)=>{
						console.log(" Error : Trying to insert duplicate data");
					});

						
				}
			}
		next();	
	});	
}

exports.postInsertFile2 = (req,res,next) =>{
	fs.readFile(inputPath2, (err, fileContent)=> {
			let inputFile2 = [];
			if(!err){    
				inputFile2 = JSON.parse(fileContent);
				for(i=0; i<inputFile2.length; i++){

				
					const group = new Group({...inputFile2[i]});
					group.save()
					.then((result)=>{  
						console.log("Insertion Succeesful");  
					})
					.catch((err)=>{
						console.log(" Error : Trying to insert duplicate data");
					});

						
				}
			}
		next();	
	});	
}


//insertMany example
exports.postInsertFile3 = (req,res,next) =>{
	fs.readFile(inputPath3,  (err, fileContent)=> {
			let inputFile3 = [];
			if(!err){    
				inputFile3 = JSON.parse(fileContent);
				College.insertMany(inputFile3)
				.then((result)=>{
					console.log("Insertion Successful");
					return res.redirect("/");
				})
				.catch((err)=>{
					console.log(err);
					const error = new Error(err); 
					error.httpStatusCode = 500;  
					next(error)
				});
			}	
	});	
};