var express = require("express")
var db = require("../db")
var utils = require("../utils")

var router = express.Router()

router.get("/",(request,response)=>{
    var connection = db.connect();

    var statement = `select id,title,description,price from product`;
    connection.query(statement,(error,data)=>{
        connection.end();
        response.send(utils.createResult(error,data))    
    })
})

router.post("/",(request,response)=>{
    const {title,description,price} = request.body;
    var connection = db.connect();

    var statement = `insert into product (title,description,price) values ('${title}','${description}',${price})`;
    connection.query(statement,(error,data)=>{
        connection.end();
        response.send(utils.createResult(error,data))    
    })
})




module.exports = router