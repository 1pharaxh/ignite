require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 3000;
const dbUri = process.env.DB_URI;
const postUri = process.env.POST_URI;

console.log(postUri);

var cors = require("cors");
const app = express();

app.use(express.json()); // parse incoming request
app.use(express.urlencoded({ extended: true })); // Parse incoming request bodies with URL-encoded payloads
const corsOptions = {
//   origin: [
//     "http://localhost:3000",
//     "https://admin-ignite.vercel.app/",
//     "https://anubhava.ignitesgtb.com",
//     "*",
//   ],
  origin: "*",
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
  pdfDescription: String,
  about_comp: String,
  website: String,
  work_location: String,
  paid_unpaid: String,
  job_profile_description: Object,
  perks: Array,
  eligibility: Array,
});

// return all companies
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

// return company by id
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

// Search companies
app.get("/search/:key", (req, res) => {
  const key = req.params.key;
  Company.find(
    {
      $or: [
        { name: { $regex: key, $options: "i" } },
        {
          job_profile_description: {
            $elemMatch: { $elemMatch: { $regex: key, $options: "i" } },
          },
        },
        { paid_unpaid: { $regex: "\\b" + key + "\\b", $options: "i" } },
        { about_comp: { $regex: key, $options: "i" } },
        { website: { $regex: key, $options: "i" } },
        { work_location: { $regex: key, $options: "i" } },
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

// Delete company by id
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

// Create company
app.post(postUri, (req, res) => {
  if (
    !req.body.name ||
    !req.body.image ||
    !req.body.about_comp ||
    !req.body.website ||
    !req.body.work_location ||
    !req.body.paid_unpaid ||
    !req.body.job_profile_description ||
    !req.body.perks ||
    !req.body.eligibility
  ) {
    return res.status(400).send("Missing required fields");
  }

  const company = new Company({
    name: req.body.name,
    image: req.body.image,
    pdfDescription: req.body.pdfDescription,
    about_comp: req.body.about_comp,
    website: req.body.website,
    work_location: req.body.work_location,
    paid_unpaid: req.body.paid_unpaid,
    job_profile_description: req.body.job_profile_description,
    perks: req.body.perks,
    eligibility: req.body.eligibility,
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
