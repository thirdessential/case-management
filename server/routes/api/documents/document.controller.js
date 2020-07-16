const Document = require('../../../models/documents')

// upload a new document
exports.upload= (req, res) => {
    console.log(req.params.id)
    console.log(req.body.name)
    // console.log(req.file)

let document = new Document({
    name:req.body.name,
    matter:req.body.matter,
    category:req.body.category,
    document: req.file.path,
    userId:req.body.userId
})

       document.save().
            then(data => {
                res.status(200).json({status: true, message:"document saved", data})
    
            }).catch(error => {
            res.status(200).json({status: false, message:error})
    
            })
    }





//Delete a matter
exports.deleteMatter = (req, res) => {
// console.log(req.params.id)
    matters.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"matters Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all Matters
exports.showAll= (req, res) => {

    Document.find({}).
        then(data => {
            res.status(200).json({status: true, message:"documents fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit features
exports.editDocument = (req, res) => {
console.log(req.body, req.params.id)
    Document.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"document updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewDocument = (req, res) => {

    Document.findById(req.params.id).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


exports.deleteDocument = (req, res) => {

    Document.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"document deleted", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}
//fetch for one user
exports.viewSpecific = (req, res) => {

    document.find({userId:req.params.id}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.viewSpecificForMatter = (req, res) => {

    Document.find({userId:req.params.id, matter:req.params.matter}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"document fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}