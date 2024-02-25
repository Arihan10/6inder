import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import https from "https"
import RentalsDAO from "./DAO/rentalsDAO.js"
// import ChatsDAO from "./DAO/chatsDAO.js"
import UsersDAO from "./DAO/usersDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const port = process.env.PORT || 8000
console.log(port)

MongoClient.connect(
    process.env.TINDER_DB_URI, 
    {
        maxPoolSize: 150, 
        wtimeoutMS: 2500, 
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    console.log("server working")
    await UsersDAO.injectDB(client); 
    await RentalsDAO.injectDB(client); 
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})