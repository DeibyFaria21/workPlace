//Importaciones
import express from "express"
import path from "path"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"

import handlebars from "express-handlebars"
import __dirname from "./utils.js"

//////////////////////////////////////////////////////////////////
/* const express = require("express")
const path = require("path")
const productsRouter = require("./routes/products.router.js")
const cartsRouter = require("./routes/carts.router.js") */
//////////////////////////////////////////////////////////////////
/* const ProductManager = require("./productManager.js") */


//Configuración del server
const app = express()
const PORT = 8080

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

//Declaración de midlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
/* app.use(express.static(path.join(__dirname, "public"))) */


/* const managerProduct = new ProductManager() */

app.get('/', (req, res) => {
    let user = {
        nombre: "Coder",
        edad: 25
    }

    res.render('index', user)
})


//EJERCICIO DE LA CLASE MOTORES DE PLANTILLAS
//Falta el array
/* app.get('/', (req, res) => {

    const nroRandom = Math.floor(Math.random() * users.length);
    const userRandom = users[nroRandom]

    res.render('index', userRandom)
}) */


app.use("/api/products", productsRouter)
app.use("/api/carts", cartsRouter)

/* app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"))
}) */


app.listen(PORT, () => {
    console.log(`Server UP: Server running on port ${PORT}`)
})