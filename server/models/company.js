const mongoose = require('mongoose')
const Schema = mongoose.Schema
const config = require('../config')
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const Company = new Schema({
   image:String,
   name: String,
    emailAddress:Array,
    phone:Array,
    website:Array,
    Address:Array,
    customFields:Array,
    billingPaymentProfile:String,
    billingCustomRate:String,
    billingClientId:String,
    address:Array,
    employees:Array
  


},schemaOptions)

module.exports = mongoose.model('Company', Company)

