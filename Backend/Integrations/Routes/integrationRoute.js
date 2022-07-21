const { Router } = require("express");
const IntegrationModel = require("../Model/Integration");
const integrationRouter = Router();

integrationRouter.get("/", (req, res) => {
  res.send(
    "Welcom to integration home url. Use '/integrations' to get inegration data"
  );
});

