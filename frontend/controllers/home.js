exports.getIndex = (req, res, next) => {
	res.status(200).render('auth/index', {
	  docTitle: "LOGIN/SIGNUP",
	  path: "/login_signup"
	});
};

exports.getHome = (req, res, next) => {
	res.status(200).render('auth/home', {
		docTitle: "HOME",
		path: "/home"
	})
};

exports.getLogin = (req, res, next) => {
	res.status(200).render('auth/login',{
		docTitle: "LOGIN",
		path: "/login"
	});
}