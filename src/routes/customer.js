const express = require('express');
const router = express.Router();   //Devolucion de un objeto de JS

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);


module.exports = router;