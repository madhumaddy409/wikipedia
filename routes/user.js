var express = require("express")

var router = express.Router()


const { check, validationResult} = require("express-validator");

const { postSignup ,postLogin ,usersDet  } = require("../controllers/user")

const {auth} = require("../middleware/auth")

const User = require("../models/user");




//signup

router.post(
    "/signup",
    
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    postSignup
);


//signup

router.post(
    "/users",
    usersDet
);


//login


router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    postLogin
  );
  

  router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });  

  


module.exports = router;