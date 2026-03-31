const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function authMiddleware(req, res, next) {
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).send({
            message: "Unauthorized",
        });
    }

    try {
        req.user = jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        return res.status(401).send({
            message: "Invalid or expired token",
        });
    }
}

module.exports = authMiddleware;