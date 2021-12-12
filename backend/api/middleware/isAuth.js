const jwt = require('jsonwebtoken');
exports.isAuth = (req, res, next) => {
	const token = req.body.token;
	
	try{
	const decoded = jwt.verify(token, process.env.JWT_KEY)
	req.userData = decoded;
	next();
	}
	catch(error){
		console.log(err);
		return res.status(401).json({
			message: "Auth Failed!"
		});
	}
};