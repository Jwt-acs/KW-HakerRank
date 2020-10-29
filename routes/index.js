const express = require("express");
const router = express.Router();
// load up our shiny new route for users
const userRoutes = require('./users');


router.get('/', (req, res, next) => {
    res.status(200).send({'message': 'success'})
})
router.get('/sms',(req, res, next) => {
    res.status(200).send({'message': 'success'})
})
// run our user route module here to complete the wire up
userRoutes(app, fs);
/*
* Add additional routes and sample requests below
*/

module.exports = router;
