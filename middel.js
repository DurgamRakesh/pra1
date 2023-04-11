const middel = (req, res, next) => {
    const user = req.body;
    if(user.name && user.password){
        next();
    }
    else{
        res.json({
            "msg":"no details"
        })
    }
}

module.exports = middel;