require("dotenv").config()
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const router = require("./router/index")
const {connect} = require("mongoose");


const app = express();
const PORT = process.env.PORT || 4500

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api", router)

const start = async () => {
    try {
        connect(process.env.DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`SERVER STARTED ON SERVER ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()