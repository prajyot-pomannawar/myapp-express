var mysql = require("mysql")

function connect(){
    var connection = mysql.createConnection({
        host:"172.18.4.122",
        user:"root",
        password:"root",
        database:"myapp_db",
        port:9090
    })

    connection.connect()
    return connection
}

module.exports = {
    connect:connect
}