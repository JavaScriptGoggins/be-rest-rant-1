const router = require('express').Router()

router.get('/', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'css/images/thai-pic-2.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'css/images/coding-cafe-2.jpg'
  }]
  
  res.render('places/index', { places })
  })

  router.get('/new', (req, res) => {
    res.render('places/new')
  })

module.exports = router