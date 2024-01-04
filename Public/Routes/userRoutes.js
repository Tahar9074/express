const express=require("express")
const router=express.Router()
let users=require("../Data")


//Get user
router.get('/',(req,res)=>{
    res.send(users)
})

router.post('/addUser',(req,res)=>{
    let newUser={...req.body,id:Math.random()}
    users.push(newUser)
    res.send(users)
})

router.delete('/:id',(req,res)=>{
    const idUser=req.params.id
    users=users.filter((el)=>el.id != idUser)
    res.send({msg:"User deleted",users})

})

router.put('/editUser/:idd',(req,res)=>{
    const idd=req.params.idd
    const userToedit=users.find((el)=>el.id == idd)
    const editedUser={...userToedit,...req.body}
    users=users.map((el)=> el.id == idd ? editedUser:el)
    res.send({msg:"User modified",users})
})

module.exports=router