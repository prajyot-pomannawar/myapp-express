var mysql = require("mysql")

function connect(){
    var connection = mysql.createConnection({
        host:"192.168.43.21",
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