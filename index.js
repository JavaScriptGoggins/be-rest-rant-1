//  modules and globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

const port = process.env.PORT || 8080

// express settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// controllers and routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
  })

app.listen(port)