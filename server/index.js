const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "shoppingCart"
})

const dbLogin = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login"
})

app.use(cors())
app.use(
    express.urlencoded({
      extended: true
    })
  )
app.use(express.json())

app.post("/login", (req, res) => {
    const username = body.req.username
    const password = body.req.password

    dbLogin.query(
        "SELECT * FROM loginTable WHERE username = ? AND password = ?", [username, password], (err, result) => {
            if(err){
               console.log(err)
            }

            if(result.lenght > 0){
                res.send(result)
            }else{
                res.send('Wrong username/password combibnation')
            }
        }
    )
})

app.get("/clothes", (req, res) => {
    const sqlSELECT = "SELECT * FROM products WHERE type='clothes'"

    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    })
})

app.get("/watches", (req, res) => {
    const sqlSELECT = "SELECT * FROM products WHERE type='watches'"

    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    })
})

app.get("/accesories", (req, res) => {
    const sqlSELECT = "SELECT * FROM products WHERE type='accesories'"

    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    })
})

app.get("/phones", (req, res) => {
    const sqlSELECT = "SELECT * FROM products WHERE type='phones'"

    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    })
})

app.get("/shoes", (req, res) => {
    const sqlSELECT = "SELECT * FROM products WHERE type='shoes'"

    db.query(sqlSELECT, (err, result) => {
        res.send(result)
    })
})

app.listen(3001, () => {
    console.log('server runnin')
})