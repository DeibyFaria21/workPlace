//Importaciones
const express = require("express")
const productManager = require("./productManager.js")


//Configuración del server
const app = express()
const PORT = 8080

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const managerProduct = new productManager()


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})