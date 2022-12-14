const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const user_routes = require("./rutas/usuarios");
/*const database = require("./config/database");*/

mongoose.Promise = global.Promise;
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));


mongoose.connect('mongodb://localhost:27017/yates',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
})
.then(()=>{
    app.use("/api",user_routes);
    app.use(express.json);
    app.listen(port, ()=>{
        console.log("Servidor en el puerto",port);
    });
})
.catch(error => console.log(error));