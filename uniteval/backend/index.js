const express = require("express");
const connectDataBase = require("./database/index");
const todoData = require("./apischema");

const App = express();

App.use(express.json());


let data = []
async function alltodos(req,res,next){
    const users = await todoData.find();
    data.push(...users);
    return res.send({
        data
    })
}

App.get("/",alltodos)

    async function postdata(req,res,next){
        const { todo : datauser } = req.body;
        let users= new todoData(datauser)
        await users.save();
    
        return res.send({
            message:"new user added",
            users
        });
    
    }


App.post("/todo/create",postdata);
    //delete

    async function deleteuser(req, res, next) {
        const { id : userId } = req.params;
    // console.log(id)
        await todoData.findByIdAndDelete(userId)
    
        return res.send({
            message: "user deleted.",
            userId
        })
    }

    App.delete("/todo/:id",deleteuser);


     //patch
     async function updateData(req,res,next){
        const { users:datauser} = req.body;
        const {id:userId} = req.params;
    
        let users = await todoData.findById(userId);
        
       for(const [key,value] of Object.entries(datauser)){
           users[key] = value;
       }
       await users.save();
    
          return res.send({
            message:"updated",
            data:users,
        })
    
    }


App.patch("/update/:id",updateData);


connectDataBase().then(() => {
    App.listen(5000, () => {
        console.log("Server connected with 5000");
    })
})