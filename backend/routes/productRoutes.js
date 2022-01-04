const express = require('express');
const router = express.Router();
const { getAllProducts, getOneProduct } = require('../controller/productControllers');

/*
* Get one product from database
*/
router.get('/:id', getOneProduct);


/*
* Get all product from database
*/
router.get('/', getAllProducts);

module.exports = router;