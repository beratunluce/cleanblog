const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 4000;
const Post = require("./models/Post");

///database connection
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

///middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/posts/:id", async (req, res) => {
	const posts = await Post.findById(req.params.id);
	res.render("post", {posts});
});

app.get("/about", (req, res) => {
	res.render("about");
});

app.get("/add_post", (req, res) => {
	res.render("add_post");
});
app.get("/index", async (req, res) => {
	const posts = await Post.find({});
	res.render("index", {
		posts,
	});
});

app.get("/", (req, res) => {
	res.redirect("/index");
});

app.post("/posts", async (req, res) => {
	await Post.create(req.body);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
