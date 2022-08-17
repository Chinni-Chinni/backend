

const express = require("express");

var app = express();
app.use(express.json())

const Alltodos = []
app.get("/", (req, res) => {
    return res.send({
        Alltodos
    })
})

app.post("/todo", (req, res) => {
    try {
        const { todo } = req.body;

        const { task } = todo;

        let max = 0;

        Alltodos.forEach(todo => {
            max = Math.max(max, todo.id)
        })
        const data = {
            id: max + 1,
            task,
            time: new Date()
        }
        Alltodos.push(data);
        res.send({ Alltodos })
    } catch (error) {
        console.log("error in posting")
    }




})

app.delete(`/todo/:id`, (req, res) => {
    let {id} = req.params;
    console.log(id);
id = parseInt(id);
    let index = null;
    Alltodos.forEach((todo,i) => {
        if(todo.id == id){
            index = i;
        }
    });
    // console.log(Alltodos)

    if(index == null){
        return res.send("Todos not exist")
    }else{
        res.send(Alltodos.splice(index,1))
    }

})

app.listen(3020, () => {
    console.log(`this is the port of 3020`)
})