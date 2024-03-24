import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongodb connected !! host : ${connectionInstance.connection.host}`) //shows the name of url where it is hosting(because production and development and testing can varry so we atlease  know on which host it is now connected  )
    } catch (error) {
        console.log("mongodb connection error : ", error)
    }
}

export default connectDB;