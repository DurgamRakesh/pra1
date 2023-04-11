const express = require('express');
const router = express.Router()
const bycrpt = require('bcrypt')
const salt = 10;
let arr = [];
router.get('/login',async (req, res) => {
    const name = req.body.name;
    const pass = req.body.pass;
    const hashpass = await bycrpt.hash(pass,salt)
    console.log('hashpassword:'+hashpass);
    let data = {
        name:name,
        pass:hashpass
    }
    arr.push(data);
    res.send(arr);
})

router.get('/newpage', async (req, res) => {
    await arr.forEach((eachdata) => {
        if(eachdata.name === req.body.name){
            bycrpt.compare(req.body.pass, eachdata.pass, (err, valid) => {
                if(err){
                    console.log('error');
                }
                if(valid == false){
                    res.send('invalid credentials')
                }
                else{
                    res.send('valid credentials')
                }
            })
        }
    })
})
module.exports = router