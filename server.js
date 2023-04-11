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

//------------------------------------------------------

// const http = require('http');

// const port = 9000;
// const app = http.createServer((req, res) => {
//     const path = req.url;
//     if(path == '/'){
//         res.write('<h1>hello this is home page</h1>');
//         res.end();
//     }
//     else if(path == '/register'){
//         res.write('<h1>hello this is register page</h1>');
//         res.end();
//     }
//     else if(path == '/login'){
//         res.write('<h1>hello this is login page</h1>');
//         res.end();
//     }
// })

// app.listen(port, () => {
//     console.log(`http server is running on ${port}`);
// })


// const express = require('express');
// const app = express();
// const port = 9000;

// app.get('/',(req, res) => {
//     res.send('home page')
// })
// app.get('/register', (req, res) => {
//     res.send('register page')
// })
// app.get('/login', (req, res) => {
//     res.send('login page')
// })
// app.listen(port, () => {
//     console.log(`express server is running on ${port}`);
// })

// const express = require('express');
// const app = express();
// const addition = require('./data')
// app.get('/', (req, res) => {
// })
// app.listen(9000, () => {
//     console.log("sum : "+addition.sum(2,4));
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const data = require('./data')
// app.listen(9000, () => {
//     console.log('9000');
//     const d = data.list();
//     console.log(d);
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// app.get('/login', (req, res) => {
//     res.json([
//         {
//             "name":'rakesh',
//             "email":"abc@gmail.com",
//             "password":'12345'

//         }
//     ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// app.use(express.json())
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// app.post('/register', (req, res) => {
//     const user = req.body;
//     console.log(user);
//     res.send(user)
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const bcrypt = require('bcrypt')
// const app = express();
// app.use(express.json())
// const salt = 10;
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// let arr = [];
// app.post('/register', async(req, res) => {
//     const name = req.body.name;
//     const password = req.body.password;

//     const hashpassword = await bcrypt.hash(password, salt)
//     console.log("hash:"+hashpassword);
//     let data = {
//         name:name,
//         password:hashpassword
//     }
//     arr.push(data);
//     res.send(arr)
// })

// app.post('/login', async (req, res) => {
//     await arr.forEach((e) => {
//         if(e.name === req.body.name){
//             bcrypt.compare(req.body.password, e.password, (err, valid) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(valid == false){
//                     res.send('invalid details')
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

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json())

// app.get('/',(req, res) => {
//     res.send('home page')
// })
// const middle = (req, res, next) =>{
//     const token = req.headers['authorization']
//     const result = token.split(' ')[1]
//     req.token = result
//     next()
// }
// app.post('/login', (req, res) => {
//     const user = req.body;
//     jwt.sign({user},'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log(token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/fr', middle, (req, res) => {
//     jwt.verify(req.token,'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

//--------------------------------------------------------------------

// const http = require('http');
// const app = http.createServer((req, res) => {
//     const path = req.url;
//     if(path == '/'){
//         res.write('home page');
//         res.end();
//     }
//     else if(path == '/register'){
//         res.write('register page');
//         res.end();
//     }
//     else if(path == '/login'){
//         res.write('login page');
//         res.end();
//     }
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// app.get('/', (req, res) => {
//     res.send('home pddage')
// })
// app.get('/register', (req, res) => {
//     res.send('reister page')
// })
// app.get('/login', (req, res) => {
//     res.send('login page')
// })
// app.listen(9000, () => {
//     console.log('e 9000');
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// app.get('/login', (req, res) => {
//     res.json([
//         {
//             "id":'1',
//             "name":'rakesh',
//             "email":'abc@gmail.com',
//             "batch":'ea17'
//         }
//     ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const {sum} = require('./data')

// app.listen(9000, () => {
//     const newdata = sum(2,4);
//     console.log('sum is:'+newdata);
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const d = require('./data')
// app.listen(9000, () => {
//     const newdata = d.data();
//     console.log(newdata);
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page')
// })

// const middelw = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.post('/login', (req, res) => {
//     const user = req.body;
//     jwt.sign({user}, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log('token'+token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/fr',middelw, (req, res) => {
//     jwt.verify(req.token, 'rakesh' ,(err, token) => {
//         if(err){
//             console.log('error');
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
// const app = express();
// const bycrpt = require('bcrypt')
// app.use(express.json());
// const salt = 10;
// app.get('/', (req, res) => {
//     res.send('home page')
// })

// let arr = [];
// app.post('/register', async (req, res) => {
//     const name = req.body.name;
//     const pass = req.body.pass;
//     const hass = await bycrpt.hash(pass, salt )
//     console.log(hass);
//     let data = {
//         name:name,
//         pass:hass
//     }
//     arr.push(data);
//     res.send(arr)
// })
// app.post('/login', async (req, res) => {
//     await arr.forEach((e) => {
//         if(e.name === req.body.name){
//             bycrpt.compare(req.body.pass, e.pass, (err, valid) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(valid == false){
//                     res.send('invlid details')
//                 }
//                 else{
//                     res.send('valid detils')
//                 }
//             })
//         }
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const apimiddle = (req, res, next) => {
//     console.log(req.query);
//     const apikey = '1234';
//     if(req.query.api_key && (req.query.api_key === apikey)){
//         next()
//     }
//     else{
//         res.send('invalid apikey')
//     } 
// }
// app.use(apimiddle)
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// app.get('/register', (req, res) => {
//     res.json([
//         {
//             "id":'1',
//             "name":'rakesh'
//         },
//         {
//             "id":'2',
//             "name":'rakesh2'
//         },
//         {
//             "id":'3',
//             "name":'rakesh3'
//         }
//     ])
// })
// app.get('/login', (req, res) => {
//     res.send('login page')
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors())
// app.use(express.json())
// const valid = (req, res, next) => {
//     const p = req.body;
//     if(p.username && p.password){
//         next()
//     }
//     else{
//         res.json({
//             "msg":'bad requst'
//         })
//     }
// }
// app.post('/signup',valid, (req, res) => {
//     res.send(req.body.username)
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

//-------------------------------------------------

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const middlewarefun = (req, res, next) => {
//     const token = req.headers['authorization']
//     const result = token.split(' ')[1]
//     req.token = result;
//     next();
// }
// app.post('/register', (req, res) => {
//     const user = req.body;
//     jwt.sign({user}, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log('token:'+ token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/login', middlewarefun, (req, res) => {

//     jwt.sign(req.token, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log('token:'+ token);
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

//--------------------------------------------------

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const m = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result;
//     next();
// }
// app.post('/register', (req, res) => {
//     const user = req.body;
//     jwt.sign({user}, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log('token:'+token);
//         res.send({
//             token
//         })
//      })
// })
// app.post('/login', m, (req, res) => {
//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const bycrpt = require('bcrypt');
// app.use(express.json());
// const salt = 10;
// app.get('/', (req, res) => {
//     res.send('home page')
// })

// let arr = [];
// app.post('/register', async (req, res) => {
//     const name = req.body.name;
//     const pass = req.body.pass;
//     const hass = await bycrpt.hash(pass, salt);
//     console.log(hass);
//     let data = {
//         name:name,
//         pass:hass
//     }
//     arr.push(data);
//     res.send(arr);
// })
// app.post('/login',async (req, res) => {
//     await arr.forEach((e) => {
//         if(e.name === req.body.name){
//             bycrpt.compare(req.body.pass, e.pass, (err, valid) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(valid == false){
//                     res.send('invalid details')
//                 }
//                 else{
//                     res.send('valid details')
//                 }
//             })
//         }
//     })
// })
// app.listen(9000, () =>{
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// app.use(express.json())
// const m = (req, res, next) => {
//     const p = req.body
//     if(p.name && p.pass){
//         next();
//     }
//     else{
//         res.json({
//             "msg":'no data'
//         })
//     }
// }
// app.post('/login', m, (req, res) => {
//     res.send('the name is' +req.body.name)
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// app.use(express.json())
// const m = (req, res, next) => {
//     const apikey = '1234'

//     if(req.query.api_key && (req.query.api_key === apikey)){
//         next();
//     }
//     else{
//         res.json({
//             "msg":'no data'
//         })
//     }
// }
// app.use(m);
// app.get('/login', (req, res) => {
//     res.json([
//         {
//             "id":"1",
//             "name":'rakesh'
//         },
//         {
//             "id":"2",
//             "name":'rakesh2'
//         },
//         {
//             "id":"3",
//             "name":'rakesh3'
//         }
//     ])
// })
// app.get('/register', (req, res) => {
//     res.send('register page')
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors())
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// app.get('/api/users', (req, res) => {
//     res.json([
//                 {
//                     "id":"1",
//                     "name":'rakesh'
//                 },
//                 {
//                     "id":"2",
//                     "name":'rakesh2'
//                 },
//                 {
//                     "id":"3",
//                     "name":'rakesh3'
//                 }
//             ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const jwt = require('jsonwebtoken');
// app.use(express.json())
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const m = (req, res, next) => {
//     const token = req.headers['authorization'];
//     const result = token.split(' ')[1];
//     req.token = result
//     next();
// }
// app.post('/register', (req, res) => {
//     const user = req.body;
//     jwt.sign({user}, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         console.log(token);
//         res.send({
//             token
//         })
//     })
// })
// app.post('/login', m, (req, res) => {
//     jwt.verify(req.token, 'rakesh', (err, token) => {
//         if(err){
//             console.log('error');
//         }
//         res.send({
//             token
//         })
//     })
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const exress = require('express');
// const app = exress();
// const bcrypt = require('bcrypt');
// app.use(exress.json())
// app.get('/', (req, res) => {
//     res.send('home page')
// })
// const salt = 10;
// const arr = [];
// app.post('/register',async (req, res) => {
//     const name = req.body.name;
//     const pass = req.body.pass;
//     const hash = await bcrypt.hash(pass, salt)
//     let data = {
//         name:name,
//         pass:hash
//     }
//     arr.push(data);
//     res.send(arr)
// })
// app.post('/login',async (req, res) =>{
//     await arr.forEach((e) => {
//         if(e.name === req.body.name){
//             bcrypt.compare(req.body.pass, e.pass, (err, valid) => {
//                 if(err){
//                     console.log('error');
//                 }
//                 if(valid == false){
//                     res.send('invalid details')
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

// const express = require('express');
// const app = express();
// const roterf = require('./loginroute')
// app.use(express.json())
// const cors = require('cors');
// app.use(cors())

// app.use('/',roterf)
// app.listen(9000, () => {
//     console.log('9000');
// })

// const express = require('express');

// const app = express();
// const d = require('./data')
// app.use(express.json())

// app.listen(9000, () => {
//     console.log(d.list());
//     console.log('9000');
// })
// const express = require('express');

// const app = express();
// const {sum} = require('./data')
// app.use(express.json())

// app.listen(9000, () => {
//     console.log(sum(2,4));
//     console.log('9000');
// })

// const express = require('express');
// const app = express();
// const cors = require('cors');
// app.use(cors({
//     origin:'*'
// }))
// app.get('/api/users', (req, res) => {
//     res.json([
//         {
//             "id":"1",
//             "name":"rakesh"
//         },
//         {
//             "id":"2",
//             "name":"rakesh2"
//         },
//         {
//             "id":"3",
//             "name":"rakesh3"
//         }
//     ])
// })
// app.listen(9000, () => {
//     console.log('9000');
// })

// const http = require('http');
// const app = http.createServer((req, res) => {
//     res.write('home');
//     res.end();
// })

// app.listen(9000, () => {
//     console.log('9000');
// })

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hello this is home page')
})
app.listen(9000,() => {
    console.log('9000');
})