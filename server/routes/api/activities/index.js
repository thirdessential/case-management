const router = require('express').Router()
const controller = require('./activity.controller')



router.post("/create", controller.createActivity)
router.get("/delete/:id", controller.deleteActivity)
router.get("/showall", controller.showAll)
router.get("/view/:id", controller.view)
router.get("/viewforuser/:id", controller.viewSpecific)
router.get("/viewformatter/:id/:matter", controller.viewSpecificForMatter)
router.post("/edit/:id", controller.editActivity)


module.exports = router