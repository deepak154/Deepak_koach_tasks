const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collegeSchema = new Schema({
	clg_name: {
		type: String,
		required: true,
	},
	clg_code: {   
		type: String,
		required: true
	},
	clg_id:{
		type: String,
		required: true,
		ref: "Group",
		unique: true
	},
	status:{type: Boolean, 
		required: true
	}
});

module.exports = mongoose.model('College', collegeSchema);  