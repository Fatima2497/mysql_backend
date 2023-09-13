const mysql = require("mysql2")

let mysqlConnect = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'QA#249972#',
    database:'employeedb'
})

mysqlConnect.connect((err)=>{
    if(err){
        console.log("No connection", err);
    }else{
        console.log("Connection Successful");
    }
})

module.exports = mysqlConnect