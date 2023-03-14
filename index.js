// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();
// app.use(express.json())
// const secretKey = 'rakesh';
// app.get('/', (req, res) => {
//     res.send('hello this is home page')
// })

// const middlew = (req, res, next) => {
//     const token = req.headers['authorization']
//     const result = token.split(' ')[1]
//     req.token = result
//     next()
// }
// app.post('/login', (req, res) => {
//     const user = req.body
//     // console.log(user);
//     jwt.sign({user}, secretKey, (err, token) => {
//         if(err){
//             console.log('err');
//             res.send('error')
//         }
//         console.log("token:"+token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/fr',middlew, (req, res) => {
//     jwt.verify(req.token, secretKey, (err, token) => {
//         if(err){
//             res.send('error')
//         }
//         res.send({
//             token
//         })

//     })
// })
// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })


// const exp = require("express")
// const body_parser = require("body-parser")
// const bcrypt = require("bcrypt")
// const app = exp();
// app.use(body_parser.json())

// const saltrounds = 10;

// app.get("/", (req, res) => {

//     res.send("hello")

// })

// const arr = []

// app.post("/register", async (req, res) => {

//     const name = req.body.name;

//     const batch = req.body.batch;

//     const pswd = req.body.pswd

//     const hashpwsd = await bcrypt.hash(pswd, saltrounds)

//     // console.log(hashpwsd, "passwrd is incripted")

//     const data = {

//         name: name,

//         batch: batch,

//         pswd: hashpwsd

//     }

//     arr.push(data);

//     res.send(arr)

// })

 

// app.post("/login", async (req, res) => {

//     await arr.forEach(function (item) {

//         if (item.name === req.body.name) {

//             bcrypt.compare(req.body.pswd, item.pswd, (err, valid) => {

//                 if (err) {

//                     console.log("err")

//                     res.send("error")

//                 }

//                 console.log(valid)

//                 if(valid==false){

//                     res.send("invalid details")

//                 }

//                 else{

//                     res.send("sucess")

//                 }

//           })

//         }

//     })

// })

 

 

// app.listen(3008, () => {

//     console.log("server is running in 3008")

// })


const express = require('express');
const bodyparser = require('body-parser');
const bcrypt = require('bcrypt');
const e = require('express');
const app = express();

app.use(bodyparser.json());

const saltr = 10;

app.get('/', (req, res) => {
    res.send('home page')
})

const arr = [];
app.post('/register' ,async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashpassword = await bcrypt.hash(password,saltr)
    let data ={
        name:name,
        email:email,
        password:hashpassword
    }
    arr.push(data);
    res.send(arr)
})

app.post('/login', async(req, res) =>{
    await arr.forEach((item) =>{
        if(item.name === req.body.name){
            bcrypt.compare(req.body.password , item.password ,(err, valid) => {
                if(err){
                    console.log('error');
                }
                if(valid == false){
                    res.send('invalid credentials')
                }
                else{
                    res.send('login sucess')
                }
            })
        }
    })
})

app.listen(9000, () => {
    console.log('server is running on 9000');
})