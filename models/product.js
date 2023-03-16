const mongoose = require("mongoose")

const { Schema } = mongoose

const productSchema = new Schema({
    name: String,
    description: String,
    price: String,
    image: String,
    category: String,
    availability: String
})


const Product = mongoose.model('Product', productSchema)