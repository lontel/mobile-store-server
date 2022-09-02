const router = require("express").Router()

// Routes of auth
router.use('/auth', require('./auth.routes'))

// Routes of user
router.use('/user', require('./user.routes'))

// Routes of item
router.use('/item', require('./item.routes'))

// Routes of upload
router.use('/upload', require('./upload.routes'))

// Routes of banner
router.use('/banner', require('./banner.routes'))

module.exports = router
