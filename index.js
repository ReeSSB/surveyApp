const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const keys = require("./config/keys");
require("./models/users");
require("./services/passport");

mongoose.connect(keys.mongoURI);

//-------------------------- mailSurveyAPP component --------------------------
const mailSurveyApp = express();

//require('./routes/authRoutes')(mailSurveyApp); //works as IIFE
authRoutes(mailSurveyApp);

const PORT = process.env.PORT || 5000;
mailSurveyApp.listen(PORT);
