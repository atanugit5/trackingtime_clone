const mongoose = require("mongoose");

const integrationSchema = mongoose.Schema({
  id: { type: Number, require: true },
  title: { type: String, require: true },
  logo: { type: String, require: true },
  intro: { type: String, require: true },
  video: { type: String },
  h1: { type: String, require: true },
  h2: { type: String, require: true },
  h3: { type: String },
  h4: { type: String },
  about: { type: String },
  visit_link: { type: String },
  dsc: { type: String },
  Q1: { type: String },
  A1: { type: String },
  Q2: { type: String },
  A2: { type: String },
  Q3: { type: String },
  A3: { type: String },
  Q4: { type: String },
  A4: { type: String },
});

const IntegrationModel = mongoose.model("integration", integrationSchema);

module.exports = IntegrationModel;
