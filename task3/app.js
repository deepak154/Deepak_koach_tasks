const fs = require("fs");
const path = require('path');   

const rootDir = process.mainModule.filename;

const inputPath1 = path.join(rootDir,'../', 'input', 'koach_students_JSON1.json');
const inputPath2 = path.join(rootDir, '../', 'input', 'koach_groups_JSON2.json');
const inputPath3 = path.join(rootDir, '../', 'input', 'koach_colleges_JSON3.json');

const outputPath1 = path.join(rootDir, '../', 'output', 'koach_students_JSON1.json');
const outputPath2 = path.join(rootDir, '../', 'output', 'koach_groups_JSON2.json');
const outputPath3 = path.join(rootDir, '../', 'output', 'koach_colleges_JSON3.json');

var output1 = (inputFile1, inputFile2, inputFile3) =>{

	let outputFile1 = {
		total_active_clgs: 0,
		total_inactive_clgs: 0,
		total_active_grps: 0,
		total_inactive_grps: 0,
		total_active_stds: 0,
		total_inactive_stds: 0
	     };

	for(i = 0; i<inputFile1.length; i++){
		if(inputFile1[i].status === true){
			outputFile1.total_active_stds++;
		}
		else{
			outputFile1.total_inactive_stds++;
		}
	}

	for(i = 0; i<inputFile2.length; i++){
		if(inputFile2[i].status === true){
			outputFile1.total_active_grps++;
		}
		else{
			outputFile1.total_inactive_grps++;
		}
	}

	for(i = 0; i<inputFile3.length; i++){
		if(inputFile3[i].status === true){
			outputFile1.total_active_clgs++;
		}
		else{
			outputFile1.total_inactive_clgs++;
		}
	}

	return outputFile1;
};

var output2 = (inputFile1, inputFile2, inputFile3)=>{
	const mixed = [];
	const mixedData = [];

	for(i=0; i<inputFile2.length; i++){
		for(j=0; j<inputFile3.length; j++){
			if(inputFile2[i].clg_id === inputFile3[j].clg_id){
				let obj1 = {clg_name : inputFile3[j].clg_name}
				let obj = {... inputFile2[i], ...obj1};
				mixed.push(obj);
				break;
			}
		}
	}

	for(i = 0; i<inputFile1.length; i++){
		for(j = 0; j<mixed.length; j++){
			if(inputFile1[i].grp_id === mixed[j].grp_id){
				let obj1 = {clg_name: mixed[j].clg_name, grp_name: mixed[j].grp_name}
				let obj2 = {
					std_name: inputFile1[i].std_name, 
					std_code: inputFile1[i].std_code,
					std_id: inputFile1[i].std_id,
					status: inputFile1[i].status
				}
				let obj = {...obj2, ...obj1};
			
				mixedData.push(obj);
				break;
			}
		}
	}
	
	//console.log(mixedData.length);
	return mixedData;
};

var output3 = (inputFile1, inputFile2, inputFile3)=>{
	let colg_ids = [
		"53158c90-ae0a-4b47-bc02-b92a9980e88d",
		"6358ccfd-636c-4541-b8fb-e62922fe97d2",
		"8e34fafd-dec9-406b-b913-869262ebbbed",
		"1317ac04-47f3-4fb4-9580-d8f8dc00771f",
		"a9b2ad65-f8b7-4091-b07c-29f3babcfdb1",
		"c36cbe5a-8c18-49e9-bd4c-51a37a3ca5b0",
		"62b8b3df-efde-47f6-a512-e478db7327bd",
		"57422d07-fe77-4cd1-b98a-143f0b1f927d",
		"41dd9823-748d-47a9-9b8d-7a99b8ad0331",
		"5b68c95e-91a8-4cc0-a6ba-dcbc6870fd6a"
	      ]
	      
	
	for(i = 0; i<inputFile3.length; i++)
	{
		inputFile3[i].clg_id = colg_ids[i]; 
	}
	return inputFile3;
};

fs.readFile(inputPath1, (err, fileContent)=> {
	
	let inputFile1 = [];
	let inputFile2 = [];
	let inputFile3 = [];
	
	if(!err){    
		inputFile1 = JSON.parse(fileContent); 
		
		fs.readFile(inputPath2, (err, fileContent)=>{
			if(!err){
				inputFile2 = JSON.parse(fileContent);
				fs.readFile(inputPath3, (err, fileContent)=>{
					if(!err){
						inputFile3= JSON.parse(fileContent);
					}
					
					
					let outputFile1 = JSON.stringify(output1(inputFile1, inputFile2, inputFile3));
					//console.log(outputFile1);
					fs.writeFile(outputPath1, JSON.stringify(outputFile1), (err) => {  
						console.log("Done writing first File");  
					});

					
					let outputFile2 = JSON.stringify(output2(inputFile1, inputFile2, inputFile3));
					//console.log(outputFile2);
					fs.writeFile(outputPath2, outputFile2, (err) => {  
						console.log("Done writing 2nd File");  
					});
					
					let outputfile3 = JSON.stringify(output3(inputFile1, inputFile2, inputFile3));
					console.log(outputfile3);
					fs.writeFile(outputPath3, outputfile3, (err)=>{
						console.log("Done writing 3rd File");
					});

				}) ;
			}
		}); 
	} 
});

//console.log(inputFile1);