const Activity = require('../../../models/activity.js')


// Create New Activity
exports.createActivity = (req, res) => {

    let activity = new Activity(req.body)
 
        activity.save().then(data => {
            res.status(200).json({status: true, message:"Activity Saved", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

//Delete an Activity
exports.deleteActivity = (req, res) => {
// console.log(req.params.id)
    Activity.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"Activity Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all 
exports.showAll = (req, res) => {

    Activity.find({}).populate("user").
        then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//View One
exports.view = (req, res) => {

    Activity.findById(req.params.id).populate("user").
        then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}


//fetch for one user
exports.viewSpecific = (req, res) => {

    Activity.find({userId:req.params.id}).populate("user").
        then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}



//Edit contact
exports.editActivity = (req, res) => {

    Activity.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"Activity updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}


//fetch for one user and one matter
exports.viewSpecificForMatter = (req, res) => {

    Activity.find({userId:req.params.id, matter:req.params.matter}).populate("user").populate("matter")
        .then(data => {
            res.status(200).json({status: true, message:"Activity fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}