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
	//After getting approval from user for access of google profile information, user is going to redirected to a diffrenet url
	mailSurveyApp.get("/auth/google/callback", passport.authenticate("google"));
};
