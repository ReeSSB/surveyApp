const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/users");
require("./services/passport");

mongoose.connect(keys.mongoURI);

//-------------------------- mailSurveyAPP component --------------------------
const mailSurveyApp = express();

mailSurveyApp.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey],
	})
);
mailSurveyApp.use(passport.initialize());
mailSurveyApp.use(passport.session());

//require('./routes/authRoutes')(mailSurveyApp); //works as IIFE
authRoutes(mailSurveyApp);

const PORT = process.env.PORT || 5000;
mailSurveyApp.listen(PORT);
