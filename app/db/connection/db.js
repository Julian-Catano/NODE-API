import mysql from "mysql2"

const connectInfo = {

    host:"localhost",
    user:"root",
    password:"",
    database:""

};

const connection = mysql.createConnection(connectInfo)


connection.connect((err)=>{
    if(err) throw err;
    console.log("conectado a la base de datos")
})

export default connection;