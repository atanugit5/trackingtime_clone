const { Router } = require("express");
const Blogmodel = require("../models/Blogmodel");
const blogrouter = Router();
blogrouter.get("/blogs", async (req, res) => {
  const blogs = await Blogmodel.find({ blogcat: "blog" });
  try {
    res.send(blogs);
    // console.log(`🚀 ~ blogrouter.get ~ blogs`, blogs);
  } catch (error) {
    console.log(`🚀 ~ blogrouter.get ~ error`, error);
    res.send({ error });
  }
});
blogrouter.get("/productivity", async (req, res) => {
  const blogs = await Blogmodel.find({ blogcat: "productivity" });
  try {
    res.send(blogs);
    // console.log(`🚀 ~ blogrouter.get ~ blogs`, blogs);
  } catch (error) {
    console.log(`🚀 ~ blogrouter.get ~ error`, error);
    res.send({ error });
  }
});
blogrouter.get("/best_practicess", async (req, res) => {
  const blogs = await Blogmodel.find({ blogcat: "best_practicess" });
  try {
    res.send(blogs);
    // console.log(`🚀 ~ blogrouter.get ~ blogs`, blogs);
  } catch (error) {
    console.log(`🚀 ~ blogrouter.get ~ error`, error);
    res.send({ error });
  }
});

blogrouter.post("/blogs", async (req, res) => {
  //   const blogs = await new Blogmodel(req.body);
  //   try {
  //     blogs.save();
  //     res.send(blogs);
  //     console.log(`🚀 ~ blogrouter.get ~ blogs`, blogs);
  //   } catch (error) {
  //     res.send({ error });
  //     console.log(`🚀 ~ blogrouter.get ~ error`, error);
  //   }

  //   console.log(req.body.data);
  let blogs;
  req.body.data.map((elem) => {
    blogs = new Blogmodel(elem);
    blogs.save();
  });
  res.send(blogs);
});

module.exports = blogrouter;
