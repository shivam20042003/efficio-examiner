const express = require('express')
const path = require("path")
const bcrypt = require("bcrypt")
const collection = require("./config");


const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req , res) => {
    res.render("intro");
})
app.get("/public/efficio",(req,res)=>{
    res.render("efficio");
})
app.post("/signup",async (req,res) => {
    const data = {
        name: req.body.cUsername,
        password: req.body.createPassword
    }

    const existingUser = await collection.findOne({name: data.name}) 

    if (existingUser) {
        res.send("userexist already");
    }
    else{
        const saltrounds = 10;
        const hashedpassword = await bcrypt.hash(data.password, saltrounds);
        data.password = hashedpassword;

        res.render("intro");
        const userdata = await collection.insertMany(data);
        console.log(userdata);
    }
})

app.post('/login',async (req, res) => {
    try {
        const check = await collection.findOne({name: req.body.username});
        if (!check) {
            res.send("user not found");
        }

        const ispasswordmatch = await bcrypt.compare(req.body.password, check.password);
        if (ispasswordmatch) {
            res.render("dash");
        }
        else{
            res.send("wrong brooo");
        }
    } catch (error) {
        res.send("wrong details");
    }
});

const port = 9000;

app.listen(port, () => {
    console.log(`server port is running on: ${port}`);
})