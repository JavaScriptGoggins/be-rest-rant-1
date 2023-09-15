const router = require('express').Router()
const db = require('../models')



router.get('/', (req, res) => {
  db.Place.find({})
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }

  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places')
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
    .populate('comments')
    .then((place) => {
      console.log(place.comments)
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body, { returnDocument: 'after' })
    .then(result => {
      console.log(result)
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.delete('/:id', (req, res) => {
  db.Place.findByIdAndRemove(req.params.id)
  .then(result => {
    console.log(result)
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render('places/edit', { place })
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.post('/:id/rant', (req, res) => {
  req.body.rant = !!req.body.rant
  db.Place.findById(req.params.id)
    .then(place => {
      db.Comment.create(req.body)
        .then(comment => {
          place.comments.push(comment)
          place.save()
            .then(() => {
              res.redirect(`/places/${req.params.id}`)
            })
            .catch(err => {
              res.render('error404')
            })
        })
        .catch(err => {
          res.render('error404')
        })
    })
    .catch(err => {
      res.render('error404')
    })

})

router.delete('/:id/rant/:rantId', (req, res) => {
  res.send('DELETE /places/:id/rant/:rantId stub')
})

module.exports = router
