const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());
app.use(cors());

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

app.get("/", (req, res) => {
  res.json({ message: "express!!!!!!!!!" });
});

const DB_USER = "pedro";
const DB_PASSWORD = encodeURIComponent("Pe97358178");

mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.k5ufwse.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectou ao MongoDB!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
