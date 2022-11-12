const Post = require("../models/Post");
const mongoose = require("mongoose");

const about = (req, res) => {
	res.render("about");
};

const addPost = (req, res) => {
	res.render("add_post");
};

const index = (req, res) => {
	res.redirect("/index");
};

const editPage = async (req, res) => {
	const post = await Post.findOne({_id: req.params.id});
	res.render("edit", {post});
};

module.exports = {
	about,
	addPost,
	index,
	editPage,
};
