require('dotenv').config();
const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('Connexion à la base de données établie');
    } catch (error) {
        console.error('Connexion à la base de données échouée');
        process.exit(1);
    }
};

module.exports = connect;