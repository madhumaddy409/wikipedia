// load the things we need
var express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

var app = express();

const userRoutes = require("./routes/user")
const wikiSearchRoutes = require("./routes/wikiSearch")
const historyRoutes = require("./routes/history")

const {auth} = require("./middleware/auth")



mongoose.connect('mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/wikipedia?retryWrites=true&w=majority',
{
     useNewUrlParser: true,
     useUnifiedTopology: true

}
 )

.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB not connected")
});


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/login');
});

// index page
app.get('/index', function(req, res) {

    res.render('pages/index');
});


// about page
app.get('/wiki', function(req, res) {
    res.render('pages/wiki');
});

// about page
app.get('/wikiinfo', function(req, res) {
  
    res.render('pages/wikiinfo');
});

// history page
app.get('/history', function(req, res) {
  
    res.render('pages/history');
});


// history page
app.get('/example', function(req, res) {
  
    res.render('pages/example');
});




//MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())



//Routes
app.use('/api', wikiSearchRoutes)
app.use("/api", userRoutes)
app.use("/api", historyRoutes)


const port = process.env.PORT || 3030
app.listen(port);
console.log(`server is litup on ${port}`);