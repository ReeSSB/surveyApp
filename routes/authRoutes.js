const passport = require("passport");

module.exports = (mailSurveyApp) => {
	// 1st Step
	//After user click signin through google, it takes user to google authentication page
	mailSurveyApp.get(
		"/auth/google",
		passport.authenticate("google", {
			scope: ["profile", "email"],
		})
	);

	//2nd Step
	//After getting approval from user for access of google profile information, user is going to redirected to a different url
	mailSurveyApp.get("/auth/google/callback", passport.authenticate("google"));

	mailSurveyApp.get("/api/logout", (req, res) => {
		req.logout();
		res.send(req.user);
	});

	mailSurveyApp.get("/api/current_user", (req, res) => {
		// res.send(req.session);
		res.send(req.user);
	});
};
