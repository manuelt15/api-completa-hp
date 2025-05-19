console.clear()
console.log(`API | HP`)

const cors = require(`cors`)
const mongoose = require(`mongoose`)
// const {PORT , DATABASE_URL} = require(`dotenv`).config().parsed
const express = require(`express`)
const PORT = 3000
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/hogwarts"

const conectar = async ()=>{
    await mongoose.connect(DATABASE_URL)
    .then(()=> console.log(`mongoose / conectado a ${DATABASE_URL} ✅`))
    .catch(error => console.log(`mongoose / no conectado a ${DATABASE_URL} ❌`))
}
conectar()

const {router} = require(`./router`)
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(router)


app.listen( PORT , ()=> console.log(`iniciando API | HP en le puerto ${PORT}`))