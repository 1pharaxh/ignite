require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;

const app = express();
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const companySchema = new mongoose.Schema({
  name: String,
  image: String,
});

const Company = mongoose.model("companies", companySchema);

app.get("/getAll", (req, res) => {
  Company.find({}, (err, companies) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(companies);
    return res.status(200).send(companies);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
