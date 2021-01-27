var express = require("express")
var router = express.Router()

const {auth} = require("../middleware/auth")



const { posthistorySearch, gethistorySearch } = require("../controllers/history")


router.post("/history", posthistorySearch)

router.get("/history", auth, gethistorySearch)






module.exports = router