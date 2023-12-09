const express = require("express");

const server = express();

server.get("/character", (req,res)=>{
    res.send("Informacion sobre el formulario de activos");
})

module.exports= server;