const router = require("express").Router()
const Banner = require('../models/Banner.model')

// Create a new item
router.post('/savePhotos', (req, res, next) => {

    const {images} = req.body

    Banner
        .create({ images })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get all items
router.get('/photosList', (req, res, next) => {

    Banner
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})







module.exports = router