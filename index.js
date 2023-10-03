const express = require("express");
const PORT = process.env.PORT || 3001;

/// APP component///
const app = express();
app.listen(3001);
app.get("/", (req, res) => {
	res.send({ hi: "there" });
});
