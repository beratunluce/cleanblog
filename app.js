const express = require("express");
const ejs = require("ejs");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const port = 4000;
const Post = require("./models/Post");

const postControl = require("./controllers/postControl");
const pageControl = require("./controllers/pageControl");

///database connection
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

///middleware
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method", {methods: ["POST", "GET"]}));

/// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/posts/:id", postControl.getPost);

app.get("/about", pageControl.about);

app.get("/add_post", pageControl.addPost);

app.get("/index", postControl.getAllPosts);

app.get("/", pageControl.index);

app.post("/posts", postControl.createPost);

app.put("/posts/:id", postControl.updatePost);

app.get("/posts/edit/:id", pageControl.editPage);

app.delete("/posts/:id", postControl.deletePost);

app.listen(port, () => console.log(`App listening on port ${port}!`));
