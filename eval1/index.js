const express = require("express");
const connectDataBase = require("./database/index");
const productsdata = require("./apischema");

const App = express();

App.use(express.json());

let getmeip = [];

App.post("/getmeip",(req,res)=>{
const data = {
    "website_name" : "masaischool.com",
    storeAt : new Date(),
}
getmeip.push(data);
res.send("3.7.190.202"+" "+'Success')

})



async function getData(req, res) {


    const data = await productsdata.find();
    res.send(data);

}

App.get("/products", getData);


async function createData(req, res) {
    try {

        const { product: Data } = req.body;

        let product = new productsdata(Data);
        await product.save();
        res.send(product);
    } catch (error) {
        console.log("Error occur")
    }
}

App.post("/products/create", createData);


// async function updateData(req, res) {

//     try {
//         const { id } = req.params;
//         const { movie: Data } = req.body;
//         movie.save();
//         const data = await findByIdAndUpdate(
//             {
//                 id
//             },
//             {
//                 Data
//             }
//         )

//     } catch (error) {
//         // throw new error;
//     }

// }




// App.patch("/create/:id", updateData);



async function deleteproduct(req,res){

    try {

        const {id : productId} = req.params;
        const data =  await productsdata.findByIdAndDelete(productId);

         res.send("deleted successfully!",data)
    }
        
     catch (error) {
        res.send(error)
       
    }
}

console.log(deleteproduct)





App.delete("/products/:productId", deleteproduct);








connectDataBase().then(() => {
    App.listen(7000, () => {
        console.log("Server connected with 7000");
    })
})


