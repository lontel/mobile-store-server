const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in here");
});


// Routes of auth
router.use('/auth', require('./auth.routes'))

// Routes of user
router.use('/user', require('./user.routes'))


module.exports = router;
