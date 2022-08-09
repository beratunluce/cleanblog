const express = require("express");
const app = express();

const blog = {id: 1, title: "Blog title", description: "Blog description"};
const port = 4000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
app.get("/", (req, res) => {
	res.send(blog);
});
