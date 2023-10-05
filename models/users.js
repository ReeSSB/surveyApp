const mongoose = require("mongoose");
// const Schema = mongoose.Schema; same as below line
const { Schema } = mongoose; // got destructured

const userSchema = new Schema({
	googleId: String,
});

mongoose.model("users", userSchema);
