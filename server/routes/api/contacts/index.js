const router = require('express').Router()
const controller = require('./contacts.controller')


router.post("/create", controller.createContact)
router.get("/delete/:id", controller.deleteContact)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)

module.exports = router