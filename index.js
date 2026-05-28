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

app.post("/login", (req, res) => {
    const {username, password} = req.body;

    if(username !== user.username || password !== user.password) return res.status(401).json({message: "invalid credentials"})

    const accessToken = jwt.sign({username, id: user.id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "5m"})
    const refreshToken = jwt.sign({username, id: user.id}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "3d"})

    res.json({accessToken, refreshToken})

})