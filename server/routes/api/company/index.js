const router = require('express').Router()
const controller = require('./company.controller')


router.post("/create", controller.createCompany)
router.get("/delete/:id", controller.deleteCompany)
router.get("/showall", controller.showAll)
module.exports = router