require('dotenv').config();
const express = require('express');
const connect = require('./config/db');
const productRoutes = require('./routes/productRoutes');

connect();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => 
    console.log(`Le serveur tourne sur le port : ${PORT}`)
);