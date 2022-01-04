require('dotenv').config();

const productsData = require('./data/products');
const connect = require('./config/db');
const Product = require('./models/Product');

connect();

const importData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(productsData);
        console.log('Produit ajouté avec succès');
        console.log(productsData);
        process.exit();
    } 
    catch (error) {
        console.error('Produit non ajouté');
        console.log(error);
        process.exit(1);
    }
};

importData();