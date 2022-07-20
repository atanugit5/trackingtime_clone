const mongoose = require("mongoose");
const blogschema = mongoose.Schema({
  thumburl: String,
  title: String,
  blogcat: String,
});

const BlogModel = mongoose.model("blog", blogschema);
module.exports = BlogModel;
