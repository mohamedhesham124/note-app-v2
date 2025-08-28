const express = require('express')
const mongoose = require('mongoose')
const path=require('path')
const bodyParser = require('body-parser')

const app = express()

let userSchema=mongoose.Schema({
    name: String,
    age: Number
})

let User=mongoose.model('user',userSchema)

/*mongoose.createConnection('mongodb://localhost:27017/appdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });*/

// Configure EJS as the template engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.render('index', {
        users: users
    })
})

app.post('/',(req, res) => {
    mongoose.connect('mongodb://localhost:27017/appdb',(err)=>{
        let newUser=new User({
            name: req.body.name,
            age: +req.body.age
        })
        newUser.save(()=>{
            mongoose.disconnect()
            res.redirect('/')
            
        })
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})