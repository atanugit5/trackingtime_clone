const mongoose = require("mongoose");
require("dotenv").config();
const blogmongourl = process.env.BLOGMONGOURL;
const connection = mongoose.connect(blogmongourl);
module.exports = connection;
