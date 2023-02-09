require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose"); // MongoDB ODM

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;

var cors = require("cors");
const app = express();
app.use(cors());

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
  about: {
    download_job_descrip: String,
    about_comp: String,
    website: String,
    work_location: String,
    job_profile_description: Array,
    profile: Object,
  },
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
