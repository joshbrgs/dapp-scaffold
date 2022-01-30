require('dotenv').config();
const express = require('express');
const path = require("path");
const AddSubscriber = require('./controller/AddSubscriber');
const bodyParser = require('body-parser');

const app = express();

//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
//parse requests
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) => {
    let newSubscriber = req.query.subscribed;

    if (newSubscriber) {
        res.render('index', {success : true})
    } else {
        res.render('index')
    }
})

app.get('/comingsoon', (req,res) => {
    res.render('signup')
})

// app.get('/api/sitemap', (req,res) => {
//     res.render('')
// })

app.post('/api/send', (req, res, next) => {
    const email = req.body.email;

    let result = AddSubscriber(email);

    if(result) {
        res.redirect('/?subscribed=true')
    }
});

app.use(express.static(__dirname + '/public/assets'));

const server = app.listen(process.env.PORT, () => {
    console.log(`The application has started on port ${server.address().port}`)
})