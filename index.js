require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

//TEST USER
const user = {
    id:1,
    username:"wayncis",
    password: "pass@123"
}