// productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Adjust the path as needed


router.post('/add', async (req, res) => {
    try {
        const { name, price, image_url } = req.body;

        const newProduct = new Product({
            name,
            price,
            image_url,
        });

        const savedProduct = await newProduct.save();

        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal Server Error', message: error.message });
    }
});


module.exports = router;
