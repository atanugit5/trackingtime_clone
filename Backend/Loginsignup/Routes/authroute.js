const {Router}=require("express")
const UserModel=require("../Model/user")

const authrouter=Router()

authrouter.post("/signup",async(req,resp)=>{
    console.log(req.body)
    const signupdata=await UserModel(req.body)
   
    signupdata.save((err,success)=>{
        if(err)
        {
            resp.status(500).send({message:"An error occured",signedup:false})
        }
        else
        {  const {email,_id}=success
            resp.status(201).send({email,_id,signedup:true})
        }
       
    })
    
})
authrouter.post("/login",async(req,resp)=>{
    console.log(req.body)
    const logindata=await UserModel.find(req.body)
    //console.log()
    if(logindata.length>=1)
    {
        let{email,_id}=logindata[0]
        let username=email.slice(0,7)
        resp.send({email,username,_id,loggedin:true})
    }
    else
    {
        resp.send({message:"wrong credentials",loggedin:false})
    }
    
    
})

module.exports=authrouter