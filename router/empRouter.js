const express = require("express")
const { createEmp, getEmp, updateEmp, deleteEmp, specificEmp } = require("../controller/empCtrl")

const router = express.Router()

router.post("/", createEmp)
router.get("/", getEmp)
router.get("/:id", specificEmp)
router.patch("/", updateEmp)
router.delete("/:id", deleteEmp)


module.exports = router