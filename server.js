const express=require("express")

//instance express
const app=express()

const port=5002

app.use(express.json())


/*routes

app.get("/",(req,res)=>(
    res.sendFile(__dirname+"/Public/home.html")
))

app.get("/Services",(req,res)=>(
    res.sendFile(__dirname+"/Public/Services.html")
))

app.get("/Contact",(req,res)=>(
    res.sendFile(__dirname+"/Public/Contact.html")
))
*/

app.use("/api/users",require("./Public/Routes/userRoutes"))

app.listen((port),err=>{
    err?console.log(err):console.log(`server is runnin on port ${port}`)
})