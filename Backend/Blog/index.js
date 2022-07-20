const express = require("express");
require("dotenv").config();
const connection = require("./db");
const port = process.env.PORT || 8000;
const cors = require("cors");
const app = express();
const blogrouter = require("./Routes/blogs");
app.use(express.json());
app.use(cors());
app.use("/blogs", blogrouter);
app.get("/", async (req, res) => {
  try {
    res.send({
      msg: "successMessage",
      status: "ok",
    });
  } catch (error) {
    res.send(error.massage);
    console.log(`🚀 ~ app.get ~ error`, error);
  }
});
app.listen(port, async () => {
  try {
    await connection;
    console.log("connectetion established with data base");
  } catch (error) {
    console.log(`🚀 ~ error`, error);
  }
  console.log(`server started without error ${port}`);
});
