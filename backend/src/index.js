require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;
const postUri = process.env.POST_URI;

console.log(postUri);

var cors = require("cors");
const app = express();

app.use(express.json()); // Parse incoming request bodies as JSON
app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies with URL-encoded payloads
const corsOptions = {
  origin: ["http://localhost:3000", "https://admin-ignite.vercel.app/", "https://anubhava.ignitesgtb.com"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
    paid_unpaid: String,
    work_location: String,
    job_profile_description: Array,
    profile: Object,
  },
});
const Company = mongoose.model("companies", companySchema);
app.get("/companies", (req, res) => {
  Company.find({}, (err, companies) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(companies);
    return res.status(200).send(companies);
  });
});

app.get("/companies/:id", (req, res) => {
  const id = req.params.id;
  Company.findOne({ _id: id }, (err, company) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(company);
    return res.status(200).send(company);
  });
});

app.get("/search/:key", (req, res) => {
  const key = req.params.key;
  Company.find(
    {
      $or: [
        { name: { $regex: key, $options: "i" } },
        { "about.download_job_descrip": { $regex: key, $options: "i" } },
        { "about.about_comp": { $regex: key, $options: "i" } },
        { "about.website": { $regex: key, $options: "i" } },
        { "about.work_location": { $regex: key, $options: "i" } },
      ],
    },
    (err, companies) => {
      if (err) {
        return res.status(500).send(err);
      }
      console.log(companies);
      return res.status(200).send(companies);
    }
  );
});
app.delete("/delete" + postUri + "/companies/:id", (req, res) => {
  const id = req.params.id;
  Company.findOneAndDelete({ _id: id }, (err, company) => {
    if (err) {
      return res.status(500).send(err);
    }
    console.log(`Company ${id} has been deleted`);
    return res.status(200).send(`Company ${id} has been deleted`);
  });
});

app.post(postUri, (req, res) => {
  if (!req.body.name || !req.body.image || !req.body.about) {
    return res.status(400).send("Missing required fields");
  }

  const company = new Company({
    name: req.body.name,
    image: req.body.image,
    about: req.body.about,
  });

  company.save((err, savedCompany) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error creating company");
    }
    console.log(savedCompany);
    return res.status(201).send(savedCompany);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
