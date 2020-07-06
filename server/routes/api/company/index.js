const router = require('express').Router()
const controller = require('./company.controller')


router.post("/create", controller.createCompany)
router.get("/delete/:id", controller.deleteCompany)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)

module.exports = router