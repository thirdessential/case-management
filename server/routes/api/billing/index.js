const router = require('express').Router()
const controller = require('./billing.controller')


router.post("/create", controller.create)
router.get("/delete/:id", controller.delete)
router.get("/showall", controller.showAll)
router.post("/edit/:id", controller.editBills)
router.get("/view/:id", controller.viewBills)
router.get("/viewforuser/:id", controller.viewSpecific)


module.exports = router