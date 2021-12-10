const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.postLogin = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;


	User.findOne({ email: email })
		.then((user) => {
			if (!user) {
				console.log("User not found");
				return res.status(409).json({
					message: "Incorrect Mail Id or Password"
				      });
			}

			bcrypt.compare(password, user.password)
				.then((doMatch) => {
					if (doMatch) {
						return res.status(200).json({
							message:"User logged In"
						});
					}

					console.log("Password is incorrect");
					return res.status(409).json({
						message: "Incorrect Mail Id or Password"
					      });

				})
				.catch((err) => {
					console.log(err);
					res.status(500).json({
						error: err
					});
				})
		})
		.catch((err) => {
			console.log(err);
      			res.status(500).json({
        		error: err
      			});
		});

};

exports.postSignup = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	const name = req.body.name;

	User.findOne({email: email})
			.then((userDoc) => {
				if(userDoc){
					return res.status(409).json({
						message: "Email already registered"
					      });
				}

				return bcrypt.hash(password, 12)
				.then((hashedPassword) => {
					const user = new User({
						email: email,
						password: hashedPassword,
						name: name
					});
					return user.save();
				})
				.then((result) => {
					console.log(result);
					return res.status(201).json({
					message: "User created"
					});
				
				})
				.catch((err) => {
					console.log(err);
      					res.status(500).json({
        				error: err
      					});
				});
		});			
};
