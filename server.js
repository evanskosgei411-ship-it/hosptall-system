const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/shaDB")
.then(()=> console.log("DB Connected"));

const authRoutes = require("./auth");
app.use("/api", authRoutes);

app.listen(4000, () => console.log("Server running on port 4000"));