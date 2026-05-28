const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token) return res.sendStatus(401); //unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, { clockTolerance: 300 }, (err, user) => {
        if(err) return res.sendStatus(403); //forbidden
        req.user = user;
        next();
    }) 
}

module.exports = authenticateToken;