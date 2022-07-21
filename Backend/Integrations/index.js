const express = require("express");
const connection = require("./db");
const integrationRouter = require("./Routes/integrationRoute");

require("dotenv").config();
const PORT = process.env.PORT;

const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/integrations", integrationRouter);

app.get("/", (req, res) => {
    res.send(
      "Welcom to integration home url. Use '/integrations' to get inegration data"
    );
  });

app.listen(PORT, async () => {
  try {
    await connection;
  } catch (err) {
    console.log("error", err)
  }
  console.log(`Listen to server ${PORT}`);
});
