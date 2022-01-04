const Product = require('../models/Product');

const getOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: 'Une erreur est survenue'});
    }
}


const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: 'Une erreur est survenue'});
    }
}

module.exports = {
    getAllProducts,
    getOneProduct
};