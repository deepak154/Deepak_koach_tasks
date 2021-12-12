const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const groupSchema = new Schema({
	grp_name: {
		type: String,
		required: true,
	},
	grp_code: {   
		type: String,
		required: true
	},
	grp_id:{
		type: String,
		required: true,
		ref: 'Student',
		unique: true
	},
	status:{type: Boolean, 
		required: true
	},
	clg_id:{
		type: String,
		ref: 'College'
	}
});

module.exports = mongoose.model('Group', groupSchema);  