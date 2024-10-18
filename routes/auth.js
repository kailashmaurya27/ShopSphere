const express = require('express');
const User = require('../models/User');
const router = express.Router() //mini instance

// to show the form of sign up
router.get('/register', (req, res)=>{
    res.render('auth/signup')
})

// actually want to register a user in my DB
router.post('/register', async(req, res)=>{
    let {email, password, username} = req.body;
    const user = new User({email, username})
    const newUser = await User.register(user, password);
    res.send(newUser);
})

module.exports = router;
