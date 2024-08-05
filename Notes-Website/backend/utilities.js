// // utilities.js
// const jwt = require("jsonwebtoken");
// const User = require("./models/user_model");

// async function authenticateToken(req, res, next) {
//     const authHeader = req.headers["authorization"];
//     const token = authHeader && authHeader.split(" ")[1];

//     if (!token) {
//         return res.status(401).json({ error: true, message: "Access token is missing" });
//     }

//     jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
//         if (err) {
//             return res.status(403).json({ error: true, message: "Invalid access token" });
//         }

//         try {
//             const user = await User.findById(decoded.user);
//             console.log(user)
//             if (!user) {
//                 return res.status(401).json({ error: true, message: "User not found" });
//             }

//             req.user = user;
//             next();
//         } catch (error) {
//             return res.status(500).json({ error: true, message: "Internal Server Error" });
//         }
//     });
// }

// module.exports = { authenticateToken };
const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Changed to 403 to indicate a forbidden access due to invalid token
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken
};
