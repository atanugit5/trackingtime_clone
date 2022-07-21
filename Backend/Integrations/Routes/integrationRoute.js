const { Router } = require("express");
const IntegrationModel = require("../Model/Integration");
const integrationRouter = Router();



integrationRouter.get("/", async (req, res) => {
  let integrations = await IntegrationModel.find({}, { __v: 0 });
  res.send(integrations);
});

integrationRouter.get("/:key", async (req, res) => {
  let data = await IntegrationModel.find({
    $or: [{ title: { $regex: req.params.key } }],
  });
  res.send(data);
});

integrationRouter.post("/", async (req, res) => {
  // console.log(req.body.data)
  let integrations;
  req.body.data.map((el) => {
    integrations = new IntegrationModel(el);
    integrations.save();
  });
  res.send(integrations);
});

module.exports = integrationRouter;
