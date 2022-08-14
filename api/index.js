const express = require("express");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const app = require("express")();
const { v4 } = require("uuid");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const userRouter = require("./routes/user");


//connect to MongoDB
mongoose.connect("mongodb+srv://maher:maher9326@cluster0.nf63j.mongodb.net/graph?retryWrites=true&w=majority'");
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));

//user schema
const user = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  district: String,
  isAdmin: Boolean,
});

//project schema
const project = new mongoose.Schema({
  title: String,
  dateCreated: String,
  description: String,
  category: String,
  thumbsUp: { type: Number, default: 0 },
  thumbsDown: { type: Number, default: 0 },
});

const User = mongoose.model("users", user);
const Project = mongoose.model("projects", project);

app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.post("/api/add-user", async (req, res) => {
  let newUser = new User(req.body);
  await newUser.save();
});

app.get("/api/get-all-projects", async (req, res) => {
  let data = await Project.find({});
  //sorts the data by number of votes before sending
  data = data.sort(
    (a, b) => (b.thumbsUp - b.thumbsDown) - (a.thumbsUp - a.thumbsDown)
  );
  res.send(data);
});

app.post("/api/add-project", async (req, res) => {
  let project = new Project(req.body);
  let currentTime = new Date();
  let currentDate = currentTime.toLocaleString();
  project.dateCreated = currentDate;
  await project.save();
});


app.get("/api/hello", async (req, res) => {

  res.send("Hello World!");
});


app.use("/api/user", userRouter);



// async function createNewProject(){
//   let project =new Project({
//     title: "A Place Making Project!",
//     description: "A project about Place Making! This project will achieve this and that...",
//     category: "PlaceMaking",
//   });
//   let currentTime = new Date();
//   let currentDate = currentTime.toLocaleString();
//   project.dateCreated = currentDate;
//   await project.save();
// }

// createNewProject()

app.post("/api/add-upvote", async (req, res) => {
  let project = await Project.findOne(req.body);
  project.thumbsUp++
  await project.save();
});

app.post("/api/add-downvote", async (req, res) => {
  let project = await Project.findOne(req.body);
  project.thumbsDown++
  await project.save();
});

app.listen(PORT, () => {
  console.log("Now listening on " + PORT);
});