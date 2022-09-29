const express = require("express");
const User = require("../model/user");
const bcryptjs=require('bcryptjs');

const authRouter = express.Router();
authRouter.post("/api/signup", async (req, res) => {
 try {
    const { name, email, password } = req.body;

    //validation
  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "Email is already exist" });
    }

    //hash password

   const hashpassword=await bcryptjs.hash(password,8);
  
    //post in database
  
    let user = new User({
      email,
      password:hashpassword,
      name,
    });
    user=await user.save();
  
    res.json(user);

 } catch (e) {

    res.status(500).json({ error: e.message });
    
 }
});



module.exports = authRouter;
