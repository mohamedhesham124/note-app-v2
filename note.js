const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const noteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model('Note', noteSchema);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/showpage', (req, res) => {
  mongoose.connect('mongodb://localhost:27017/stickynotesdb', {
    useNewUrlParser: true,
  }).then(()=>{
      Note.find().then((result)=>{
        res.render('show', {
        notes: result
      })
      mongoose.disconnect()
    }).catch((err)=>{
      console.error(err);
    })
  });
})

app.post('/notes', async (req, res) => {
  mongoose.connect('mongodb://localhost:27017/stickynotesdb', {
    useNewUrlParser: true,
  }).then(()=>{
      Note.create({
        title: req.body.title,
        content: req.body.content
      }).then(()=>{
        mongoose.disconnect()
        res.redirect('/showpage');
      })
    }).catch((err)=>{
      console.error(err);
    })
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});