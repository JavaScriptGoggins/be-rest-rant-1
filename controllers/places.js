const router = require('express').Router()
const places = require('../models/places-model.js')

// places get
router.get('/', (req, res) => {
    res.render('places/index', { places })
})
//new places get
  router.get('/new', (req, res) => {
    res.render('places/new')
  })
// places post
  router.post('/', (req, res) => {
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

    // edit route
    router.get('/:id/edit', (req, res) => {
      let id = Number(req.params.id)
      if (isNaN(id)) {
          res.render('error404')
      }
      else if (!places[id]) {
          res.render('error404')
      }
      else {
        res.render('places/edit', { place: places[id] })
      }
    })

    router.put('/:id', (req, res) => {
      console.log('PUT request revieved for ID:', req.params.id);
      let id = Number(req.params.id);
      if (isNaN(id) || !places[id]) {
          return res.render('error404');
      }
  
      // Assuming you are storing places as objects in an array
      // and that req.body contains the updated place data.
      places[id] = {
          ...places[id], 
          ...req.body
      };
  
      res.redirect(`/places/${id}`);

  });

   //making sure id is a number
  router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      res.render('places/show', { place: places[id], id })
    }
  })
  // delete route
  router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
      res.render('error404')
    }
    else if (!places[id]) {
      res.render('error404')
    }
    else {
      places.splice(id, 1)
      res.redirect('/places')
    }
  })


module.exports = router