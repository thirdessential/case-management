const Contact = require('../../../models/contacts.js')


// Create New List
exports.createContact = (req, res) => {

    let contact = new ContactUs()
    contact.image:req.body,
    contact.prefix: req.body,
    contact.firstName:req.body,
    contact.middleName:req.body,
    contact.lastName:req.body,
    contact.company:req.body,
    contact.title:req.body,
    contact.emailAddress:req.body,
    contact.phone:req.body,
    contact.websiteType:req.body,
    contact.Address:req.body,
    contact.customFields:req.body,
    contact.billingPaymentProfile:req.body,
    contact.billingCustomRate:req.body,
    contact.billingClientId:req.body,
 

  

        contactUs.save().then(data => {
            res.status(200).json({status: true, message:"ContactUs list Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteList = (req, res) => {
// console.log(req.params.id)
    ContactUs.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"contactUs list Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    ContactUs.find({}).
        then(data => {
            res.status(200).json({status: true, message:"ContactUs list fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}