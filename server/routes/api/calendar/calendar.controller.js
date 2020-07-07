const Event = require("../../../models/calendar");

// Create New List
exports.createCalendar = (req, res) => {
  let event = new Event(req.body);

  event
    .save()
    .then((data) => {
      res.status(200).json({ status: true, message: "event  Saved", data });
    })
    .catch((error) => {
      res.status(400).json({ status: false, message: error });
    });
};

//Delete a list
exports.deleteEvent = (req, res) => {
  // console.log(req.params.id)
  Event.findByIdAndRemove(req.params.id)
    .then((data) => {
      res.status(200).json({ status: true, message: "Event Removed", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//Show all
exports.showAll = (req, res) => {
  Event.find({})
    .then((data) => {
      res.status(200).json({ status: true, message: "Events fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//View One
exports.view = (req, res) => {
  Event.findById(req.params.id).populate("matter")
    .then((data) => {
      res.status(200).json({ status: true, message: "Event fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

//fetch for one user
exports.viewSpecific = (req, res) => {
  Event.find({ userId: req.params.id }).populate("matter")
    .then((data) => {
      res.status(200).json({ status: true, message: "Event fetched", data });
    })
    .catch((error) => {
      res.status(200).json({ status: false, message: error });
    });
};

exports.updateEvent = (req, res) => {
  Event.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((data) => {
      res.status(200).json({ status: true, message: "Event updated ", data });
    })
    .catch((error) => {
      res.status(400).json({ status: false, message: error });
    });
};

exports.fetchForMatter = (req, res) => {
    Event.find({matter: req.params.id}).populate("matter")
      .then((data) => {
        res.status(200).json({ status: true, message: "events fetched for matter", data });
      })
      .catch((error) => {
        res.status(400).json({ status: false, message: error });
      });
  };