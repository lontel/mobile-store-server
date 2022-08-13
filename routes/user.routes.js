const router = require("express").Router()
const { isAuthenticated } = require('../middleware/jwt.middleware')
const User = require('../models/User.model')


// Get all users
router.get('/getAllUsers', isAuthenticated, (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Get my profile
router.get('/myprofile/:user_id', isAuthenticated, (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Update user
router.put('/update/:user_id', isAuthenticated, (req, res, next) => {

    const { user_id } = req.params
    const { username, avatar, email, role } = req.body

    User
        .findByIdAndUpdate(user_id, { username, avatar, email, role })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// Delete user
router.delete('/delete/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


module.exports = router