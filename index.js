const express = require("express");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");

//-------------------------- mailSurveyAPP component --------------------------
const mailSurveyApp = express();

//require('./routes/authRoutes')(mailSurveyApp); //works as IIFE
authRoutes(mailSurveyApp);

const PORT = process.env.PORT || 5000;
mailSurveyApp.listen(PORT);
