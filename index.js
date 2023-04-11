// const http = require('http');

// const app = http.createServer((req, res) => {
//     const path = req.url
//     if(path === '/'){
//         res.write('home page');
//         res.write('home page');
//         res.write('home page');
//         res.end();
//     }
// })
// app.listen(9000, () => {
//     console.log('http server is running on 9000');
// })

// const express = require('express');
// const app = express();
// app.use(express.json())
// const middlefun = (req, res, next) => {
//     const user = req.body;
//     if(user.name && user.password){
//         next()
//     }
//     else{
//         res.json({
//             "msg":"no data availble here"
//         })
//     }
// }
// app.get('/login', middlefun, (req, res) => {
//     console.log('the usernameis'+req.body.name);
// })
// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })

// const express = require('express');
// const app = express();
// app.use(express.json())
// const route = require('./hashpassword')
// app.use('/', route)
// app.listen(9000, () => {
//     console.log('server is running on 9000');
// })

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json())
const secretKey = 'rakesh'

const middelw = (req, res, next) => {
    const token = req.headers['authorization'];
    const r = token.split(' ')[1];
    req.token = r;
    next();
}
app.get('/register', (req, res) => {
    const user = req.body;
    jwt.sign({user},secretKey, (err, token) => {
        if(err){
            console.log('error');
        }
        console.log('token:'+ token);
        res.send({
            token
        })
    })
})
app.get('/login', middelw, (req, res) => {
    jwt.verify(req.token, secretKey, (req, res) => {
        if(err){
            console.log('error');
        }
        res.send({
            token
        })
    })
})

app.listen(9000, () => {
    console.log('server is running on 9000');
})
