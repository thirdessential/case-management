const router = require('express').Router()
const controller = require('./contacts.controller')


router.post("/create", controller.createContact)
router.get("/delete/:id", controller.deleteContact)
router.get("/showall", controller.showAll)
module.exports = router