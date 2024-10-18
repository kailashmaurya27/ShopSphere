const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router() //mini instance

// to show the form of sign up
router.get('/register', (req, res)=>{
    res.render('auth/signup')
})

// actually want to register a user in my DB
router.post('/register', async(req, res)=>{
    try{
        let {email, password, username} = req.body;
        const user = new User({email, username})
        const newUser = await User.register(user, password);
        // res.redirect('/login');
        req.login( newUser, function(err){
            if(err){
                return next(err);
            }
            req.flash('success', 'welcome')
            return res.redirect('/products');
        })
    }
    catch(e){
        req.flash('error', e.message);
        return res.redirect('/signup');
    }
   
})

// to get login form
router.get('/login', (req, res)=>{
    res.render('auth/login')
})

// to actally login via the db
router.post('/login',
    passport.authenticate('local',{
        failureRedirect: '/login',
        failureMessage: true
    }),
    (req, res) =>{
        // console.log(req.user); 
        req.flash('success', 'Welcome Back')
        res.redirect('/products');
    }
)

// logout
router.get('/logout', (req, res) =>{
    ()=>{
        req.logout();
    }
    req.flash('success','goodbye friends');
    res.redirect('/login')
})


module.exports = router;
