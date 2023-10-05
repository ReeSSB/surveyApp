const keys = require("../config/keys.js");
const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback",
		},
		(accessToken, refreshToken, profile, done) => {
			console.log("accessToken:", accessToken);
			console.log("refresh-token:", refreshToken);
			console.log("profile:", profile);
			console.log("done:", done);

			User.findOne({ googleId: profile.id }).then((existingUser) => {
				if (existingUser) {
					//we already have a record for the given profile id.
					done(null, existingUser);
				} else {
					//we dont have a user record with this ID, make a new record from mongooge model instance
					new User({
						googleId: profile.id,
					})
						.save()
						.then((user) => {
							done(null, user);
						});
				}
			});
		}
	)
);
