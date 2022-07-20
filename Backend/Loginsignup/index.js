const express=require("express")
const mongoose=require("mongoose")
const connect=require("./db")
const authrouter=require("./Routes/authroute")
const app=express()
app.use(express.json())
// app.get("/",(req,resp)=>{
//     resp.send("hello user")
// })
app.use("/auth",authrouter)
const portenv=require("dotenv")
portenv.config()
const PORT=process.env.PORT
app.listen(PORT,async()=>{
    console.log("server started")
    try
    {
        await connect
        console.log("server connected")
    }
    catch
    {
        console.log("error in server")
    }
})
