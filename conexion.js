var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    db: "formulario"
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
    
});

function funcionConfirmar(){
    var mail, name, lastName, phone, country, linea1, linea2, postalCode;
    mail  = document.getElementById("correo").value;
    name = document.getElementById("name").value;
    lastName = document.getElementById("lastName").value;
    phone = document.getElementById("phone").value;
    country = document.getElementById("country").options[document.getElementById("country").selectedIndex].text;
    linea1 = document.getElementById("linea1").value;
    linea2 = document.getElementById("linea2").value;
    postalCode = document.getElementById("postalCode").value;
   
}