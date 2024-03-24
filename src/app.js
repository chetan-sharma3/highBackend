import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"; //(cookieParser) is use for to perform crud operations on clients cookies

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

app.use(express.json({limit:"15kb"})) //this will allow the json file to the express and we have set the limit so our server won't crash
app.use(express.urlencoded({limit:"15kb"}))
app.use(express.static("public")) //express.static("public"): This middleware function is used to serve static files from the "public" directory (or any other specified directory) to the client. Static files are files that don't change often and are typically part of your website or web application, like HTML pages, CSS stylesheets, client-side JavaScript files, images, and more.

app.use(cookieParser()) //When a client (e.g., a web browser) sends a request to your Express server, it can include cookies in the request headers. Cookies are small pieces of data stored by the browser and sent with each request to the same domain. They are commonly used for session management, user authentication, and tracking user preferences

export default app;