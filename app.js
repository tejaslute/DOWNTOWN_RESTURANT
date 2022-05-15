// Require express and create an instance of it
var express = require('express');
var app = express();
var mysql = require('mysql');
var path = require('path');
var db = require('./databse');
var bodyParser = require('body-parser');

const { auth, requiresAuth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'a long, randomly-generated string stored in env',
    baseURL: 'http://localhost:3000',
    clientID: 'VaeEelvuLnMQmPIV1w3ew2Jr269KeNjX',
    issuerBaseURL: 'https://dev-86dn4vug.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });


// app.set('view engine', 'html');
// app.engine('html', require('ejs').renderFile);
// on the request to root (localhost:3000/)
// var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function (req, res) {
    // res.render('C:\WEB\EMBEDSOL\test\views\index.html');
    res.render('index.html');
});

app.get('/book', requiresAuth(), (req, res) => {
    res.sendFile(path.join(__dirname, "\\views\\contact.html"));
});

// // On localhost:3000/welcome
app.post('/post', urlencodedParser, function (req, res) {
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var date = req.body.date;
    var time = req.body.time;




    var sql = `INSERT INTO customer ( firstName, lastName, email, mobile, Date_a, Time_a) VALUES ( "${firstName}", "${lastName}", "${email}", "${mobile}", "${date}", "${time}")`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
    });
    res.redirect('/')
});


app.get('/', function (req, res) {

    res.render('index.html');
});
app.post('/post1', urlencodedParser, function (req, res) {
    var Username = req.body.Username;
    var Password = req.body.Password;
    var Email = req.body.Email;

    console.log(req.body);


    var sql = `INSERT INTO account ( Username, Password, Email) VALUES ( "${Username}", "${Password}", "${Email}")`;
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log('record inserted');
    });

});




// // On localhost:3000/welcome

// // Change the 404 message modifing the middleware
// app.use(function (req, res, next) {
//     res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
// });

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});
