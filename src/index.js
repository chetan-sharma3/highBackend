// require('dotenv').config({path : './env'})  we have to add this in the starting, by doing this our work is done but it is disturbing the consistency of code so we use different method

//now we import the db connection file from db folder and then execute it 

// import express from "express"

// const app = express();

// //this below code will run immidieltly
// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_RUI}{DB_NAME}`)
//         app.on("error",(error)=>{ //it is a listener if app is not able to connect then it will throw error
//             console.log("error : ", error)
//             throw error
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("ERROR : ",error)
//         throw err
//     }
// })()
//above all code is use for the connection of db and this is first apporach there is also second approach(going to write code in different folder so the code will not look like mess)

import dotenv from "dotenv" //we also have the experimental feature in which there lines 29 and 31 are not needed but in json file script we add default but for now it is experimental
import connectDB from "./db/index.js"
dotenv.config({path:'./env'})  

connectDB();