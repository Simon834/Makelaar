const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = async (req, res, next) => {
  const token = req.headers.authToken;
  if (!token) {
    return res.status(403).send("Please provide auth token");
  }
  try {
    const decoded = await jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    res.send("Invalid Token");
    next(error);
  }
};

module.exports = verifyToken;
