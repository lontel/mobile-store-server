const router = require("express").Router()
const Item = require('../models/Item.model')

// Create a new item
router.post('/save', (req, res, next) => {

    const {name, category, images, description, rating, price, publisher, releaseDate, owner} = req.body

    Item
        .create({name, category, images, description, rating, price, publisher, releaseDate, owner})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get all items
router.get('/list', (req, res, next) => {

    Item
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get details of a specific item
router.get('/details/:item_id', (req, res, next) =>{

    const {item_id} = req.params

    Item
        .findById(item_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Update item
router.put('/update/:item_id', (req, res, next) => {

    const {item_id} = req.params
    const {name, category, images, description, rating, price, publisher, releaseDate, owner} = req.body

    Item
        .findByIdAndUpdate(item_id, {name, category, images, description, rating, price, publisher, releaseDate, owner})
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Delete item
router.delete('/delete/:item_id', (req, res, next) => {

    const {item_id} = req. params

    Item
        .findByIdAndDelete(item_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get filtered items
router.get('/getFilteredItems', (req, res) => {

    const { name } = req.query

    Item
        .find({ name: new RegExp(name, 'i') })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router