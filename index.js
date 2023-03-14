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


// const express = require('express');
// const bodyparser = require('body-parser');
// const bcrypt = require('bcrypt');
// const e = require('express');
// const app = express();

// app.use(bodyparser.json());

// const saltr = 10;

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// const arr = [];
// app.post('/register' ,async(req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     const hashpassword = await bcrypt.hash(password,saltr)
//     let data ={
//         name:name,
//         email:email,
//         password:hashpassword
//     }
//     arr.push(data);
//     res.send(arr)
// })

// app.post('/login', async(req, res) =>{
//     await arr.forEach((item) =>{
//         if(item.name === req.body.name){
//             bcrypt.compare(req.body.password , item.password ,(err, valid) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(valid == false){
//                     res.send('invalid credentials')
//                 }
//                 else{
//                     res.send('login sucess')
//                 }
//             })
//         }
//     })
// })

// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })

//-----------------------------------------------------------------

// create server using http:

// const http = require('http');

// const PORT = 9000;
// const server = http.createServer((req, res) => {
//     res.write('hello this is home page');
//     res.end();
// })

// server.listen(PORT, () => {
//     console.log('server is running on '+ PORT);
// })

//create routing in http:

// const http = require('http');
// const port = 9000;

// const server = http.createServer((req, res) =>{

//     const pathname = req.url;

//     if(pathname == '/'){
//         res.write('<h1>home page</h1>');
//         res.end();
//     }
//     else if(pathname == '/register'){
//         res.write('<h1>register page</h1>');
//         res.end();
//     }
//     else if(pathname == '/login'){
//         res.write('<h1>login page</h1>');
//         res.end();
//     }
//     else if(pathname == '/contact'){
//         res.write('<h1>contact page</h1>');
//         res.end();
//     }
// })

// server.listen(port, () =>{
//     console.log(`server is running on ${port}`);
// })

//create server using express:

// const express = require('express');
// const app = express();
// const port = 9000;
// app.listen(port, () => {
//     console.log(`express server is running on ${port}`);
// })

//create routing in express:

// const express = require('express');

// const app = express();

// const port = 9000;

// //routing
// app.get('/', (req, res) => {
//     res.send('hello this is home page')
// })

// app.get('/register', (req, res) =>{
//     res.send('hello this is register page')
// })

// app.get('/login', (req, res) => {
//     res.send('hello this is login page')
// })
// app.listen(port, () => {
//     console.log(`express server is runnig on ${port}`);
// })

//exports in onther file import this file:

// const http = require('http');
// const s = require('./data')

// const server = http.createServer((req, res)=> {
//     if(req.url == '/'){
//         const da = s.list();
//         res.write('home')
//         res.end();

//     }
// })
// server.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');

// const app = express();
// const cors = require('cors')

// app.use(cors({origin:'*'}))
// app.get('/', (req, res) => {
//     res.json([
//         {  
//             "id":'1',
//             "name":'hello',
//             "email":'abc@gmail.com',
//             "password":'123'
//         }
//     ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const bodyparser = require('body-parser');
// const app = express();
// app.use(bodyparser.json())

// app.get('/', (req, res) => {
//     const user = req.body;
//     console.log(user);
//     res.send(user)
// })
// app.listen(9000, () => {
//     console.log('9000');
// })


// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();

// app.use(express.json());
// const secretKey = 'rakesh';

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const middelw = (req, res, next) => {
//     const token = req.headers['authorization']
//     const result = token.split(' ')[1]
//     req.token = result
//     next()
// }
// app.post('/login', (req, res) => {
//     const user = req.body;
//     jwt.sign({user}, secretKey, (err, token) =>{
//         if(err){
//             console.log('error');
//             res.send(err)
//         }
//         console.log(token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/fr',middelw, (req, res) => {
//     jwt.verify(req.token, secretKey, (err, token) => {
//         if(err){
//             console.log('error');
//             res.send(err)
//         }
//         res.send({
//             token
//         })
//     })
// })

// app.listen(9000, () => {
//     console.log('9000');
// })
// const express = require('express');

// const bodyparser = require('body-parser');
// const bcrypt = require('bcrypt');
// const app = express();
// app.use(bodyparser.json());

// const saltr = 10;
// app.get('/', (req, res) => {
//     res.send('home page')
// })

// let arr = []
// app.post('/register',async (req, res) => {
//     const name = req.body.name;
//     const pass = req.body.password;
//     const hashpass = await bcrypt.hash(pass,saltr)

//     console.log('hashpass:',hashpass);
//     let data = {
//         name:name,
//         password:hashpass
//     }
//     arr.push(data)
//     res.send(arr)
// })

// app.post('/login', async(req, res) => {
//     await arr.forEach((eachitem) => {
//         if(eachitem.name == req.body.name){
//             bcrypt.compare(req.body.password, eachitem.password, (err, valid) => {
//                 // if(err){
//                 //     console.log(err);
//                 // }
//                 if(valid == false){
//                     res.send('invalid credentials')
//                 }
//                 else{
//                     res.send('valid details')
//                 }
//             })
//         }
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })