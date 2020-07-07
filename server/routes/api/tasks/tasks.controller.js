const tasks = require('../../../models/tasks')


// Create New task
exports.createTask = (req, res) => {

    let Tasks = new tasks(req.body)

        Tasks.save().then(data => {
            res.status(200).json({status: true, message:"Tasks Saved", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Delete a task
exports.deleteTask = (req, res) => {
// console.log(req.params.id)
    tasks.findByIdAndRemove(req.params.id).
        then(data => {
            res.status(200).json({status: true, message:"task Removed", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Show all tasks
exports.showAllTasks = (req, res) => {

    tasks.find({}).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//Edit tasks
exports.editTasks = (req, res) => {

    tasks.findByIdAndUpdate(req.params.id, req.body, {new: true}).
        then(data => {
            res.status(200).json({status: true, message:"tasks updated", data})

        }).catch(error => {
        res.status(400).json({status: false, message:error})

        })
}

exports.viewTasks = (req, res) => {

    tasks.findById(req.params.id).populate("matter").
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

//fetch for one user
exports.viewSpecific = (req, res) => {

    tasks.find({userId:req.params.id}).
        then(data => {
            res.status(200).json({status: true, message:"tasks fetched", data})

        }).catch(error => {
        res.status(200).json({status: false, message:error})

        })
}

exports.fetchForMatter = (req, res) => {
    tasks.find({matter: req.params.id})
      .then((data) => {
        res.status(200).json({ status: true, message: "tasks fetched for matter", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };