const jwt = require('jsonwebtoken');
require('dotenv').config();

async function authUser(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({ message : "Unauthorized" })
    }
try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.role !== 'user'){
        return res.status(403).json({ message : "You dont't have access"});
    }
    req.user = decoded; //we created a property called user to access it in controllers
    next();

}catch (err) {
    console.log(err);
    return res.status(401).json({ message : "Unauthorized" })
    

}
}

async function authAdmin(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({ message : "Unauthorized" })
    }

    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.role !== 'admin'){
        
        return res.status(403).json({ message : "You dont't have access"});

    }
    req.admin = decoded; //we created a property called admin to access it in controllers
    next();

}catch (err) {
    console.log(err);
    return res.status(401).json({ message : "Unauthorized" })
    
}

}

module.exports = { authUser, authAdmin }