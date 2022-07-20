const express=require("express")
 const mongoose=require("mongoose")
 const ENV=require("dotenv")
 ENV.config()
 const database=process.env.MONGODB_URL
 const connect=mongoose.connect(database)
 module.exports=connect
