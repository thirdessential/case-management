const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')

const Features = new Schema({
    title:String,
    description:String
})

module.exports = mongoose.model('Features', Features)