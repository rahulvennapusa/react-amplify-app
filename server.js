const express = require("express");
const cors = require("cors");

const data = require("./data")

const app = express();


app.use(cors());

app.get("/api/getData",(req,res) => {
res.json(data);
});

app.listen(8000,()=> {

    console.log("server is running om port 8000");
});
