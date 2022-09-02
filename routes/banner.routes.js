const router = require("express").Router()
const Banner = require('../models/Banner.model')

// Update a new photo
router.post('/savePhotos', (req, res, next) => {

    const { pictures } = req.body

    Banner
        .create({ pictures })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get all photos
router.get('/photosList', (req, res, next) => {

    Banner
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router