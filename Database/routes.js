const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('./models/SignUpmodels')

router.post('/signup', function (req, res) {
    const signedUpUser = new signUpTemplateCopy({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error=>{
        res.json(error)
    })

    
  })


module.exports = router