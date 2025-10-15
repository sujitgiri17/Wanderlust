const User = require("../models/user");


module.exports.renderSignUp = (req, res) =>{
    res.render("users/signup.ejs")
}

module.exports.SignUp = async(req, res)=>{
    try{
        let{username, email, password} = req.body
        const newUser = new User({email, username})
        const registeredUser =  await User.register(newUser, password)
        console.log(registeredUser)
        req.login(registeredUser, (err) =>{
            if(err){
                return next(err);
            }
            req.flash("success" , "Welcome to Wanterlust!")
            res.redirect("/listings")
        })
        
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup")
    }
   
}


module.exports.renderLogin = (req, res)=>{
    res.render("users/login.ejs")
}

module.exports.Login = async(req, res)=>{
    req.flash("success", "Welcome to Wanderlust! You are logged in!");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
   }

module.exports.Logout = (req, res, next) =>{
    req.logOut((err) =>{
        if(err) {
          return  next(err);
        }
        req.flash("success" , "you are Logged out!")
        res.redirect("/listings")
    })
}
