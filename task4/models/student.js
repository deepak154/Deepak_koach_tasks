const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	std_name: {
		type: String,
		required: true,
	},
	std_code: {   
		type: String,
		required: true
	},
	std_id:{
		type: String,
		required: true,
		unique: true
	},
	status:{type: Boolean, 
		required: true
	},
	grp_id:{
		type: String,
		ref: 'Product'
	}
});

module.exports = mongoose.model('Student', studentSchema);  