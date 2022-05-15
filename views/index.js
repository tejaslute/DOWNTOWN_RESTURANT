
function saveAccount() {
    var mysql = require('mysql');
    console.log("into the function")

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Coding@123",
        database: "website"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("connected to the databse");
    });

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var psw = document.getElementById("psw").value;
    var userName = document.getElementById("userName").value;
    var email = document.getElementById("inputText").value;

    var sql = "INSERT INTO accounts (UserName, FirstName, LastName, Email, UserPassword) VALUES ('" + userName + "', '" + firstName + "','" + lastName + "','" + email + "','" + psw + "')";
    con.query(sql, function (err, result) {
        if (err) {
            throw err;

        }

        console.log(result.affectedRows + " record(s) updated");
    });
}