const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req , res) => {
const {name, lastName, email,passWord}=req.body;
try {
    const newUser = new User({name, lastName,email,passWord});


const searchedUser= await User.findOne({email});
if (searchedUser){
    return res.res.status(400).send({msg:"email already exist"});
}

} catch (error) {
    
}
}