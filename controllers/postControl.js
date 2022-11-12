const Post = require("../models/Post");
const mongoose = require("mongoose");

const getPost = async (req, res) => {
	const posts = await Post.findById(req.params.id);
	res.render("post", {posts});
};

const getAllPosts = async (req, res) => {
	const posts = await Post.find({});
	res.render("index", {
		posts,
	});
};

const createPost = async (req, res) => {
	await Post.create(req.body);
	res.redirect("/index");
};

const updatePost = async (req, res) => {
	const post = await Post.findOne({_id: req.params.id});
	post.title = req.body.title;
	post.mess = req.body.mess;
	post.save();

	res.redirect(`/posts/${req.params.id}`);
};

const deletePost = async (req, res) => {
	await Post.findByIdAndRemove(req.params.id);
	res.redirect("/index");
};

module.exports = {
	getPost,
	getAllPosts,
	createPost,
	updatePost,
	deletePost,
};
