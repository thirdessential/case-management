const Company = require('../../../models/company')


// Create New List
exports.createCompany = (req, res) => {
   
    let company = new Company()

    company.name=req.body.name,
    company.emailAddress=req.body.emailAddress,
    company.phone=req.body.phone,
    company.website=req.body.website,
    company.address=req.body.address,
    company.customFields=req.body.customFields,
    company.billingPaymentProfile=req.body.billingPaymentProfile,
    company.billingCustomRate=req.body.billingCustomRate,
    company.billingClientId=req.body.billingClientId,
    company.employees=req.body.employees
    company.userId=req.body.userId


 
        company.save().then(data => {
            res.status(200).json({status: true, message:"Company  Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete a list
exports.deleteCompany = (req, res) => {
// console.log(req.params.id)
    Company.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Company Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Company.find({}).
        then(data => {
            res.status(200).json({status: true, message:"Contacts fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Company.findById(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"company fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}



//fetch for one user
exports.viewSpecific = (req, res) => {

    Company.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"company fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}