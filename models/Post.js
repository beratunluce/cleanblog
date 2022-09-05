const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	title: String,
	mess: String,
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
