const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authArtist(req, res, next) {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({ message : "Unauthorized" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(decoded.role !== 'artist'){
            return res.status(403).json({ message : "You dont't have access"})
        } 

        req.user = decoded; //we created a property called user to access it in controllers

        next()
    } catch (error) {
        console.log(err);
        return res.status(401).json({ message : "Unaithorized" })
        
    }
}

module.exports = { authArtist }