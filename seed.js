const mongoose = require('mongoose');
const Product = require('./models/Product');

const products = [
    {
        name: "Iphone 16 Pro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s",
        price: 130000,
        desc: "aukat ke bahar"
    },
    {
        name: "Iphone 16 Pro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s",
        price: 130000,
        desc: "aukat ke bahar"
    },
    {
        name: "Iphone 16 Pro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s",
        price: 130000,
        desc: "aukat ke bahar"
    },
    {
        name: "Iphone 16 Pro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s",
        price: 130000,
        desc: "aukat ke bahar"
    },
    {
        name: "Iphone 16 Pro",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAPkJr-A83pgKDpNBrRatIXniBLXptZhmZQ&s",
        price: 130000,
        desc: "aukat ke bahar"
    }
]

async function seedDB(){
    await Product.insertMany(products);
    console.log("Data Seeded Successfully");
}

module.exports = seedDB;