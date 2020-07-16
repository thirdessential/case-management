const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Bills = new Schema({
  client:{type:Schema.Types.ObjectId, ref:"User"},
  source:String,
  paymentDate:Date,
  destination:{type:Schema.Types.ObjectId, ref:"Account"},
  ReferenceId:String,
  userId:{type:Schema.Types.ObjectId, ref:"User"}


},schemaOptions)

module.exports = mongoose.model('Bills', Bills)