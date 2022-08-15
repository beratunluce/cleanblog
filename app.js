const express = require("express");
const ejs = require("ejs");
const app = express();
const path = require("path");
const port = 4000;
/// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/add_post", (req, res) => {
	res.render("add_post");
});
app.get("/index", (req, res) => {
	res.render("index");
});

app.get("/", (req, res) => {
	res.render("index");
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
