const express = require("express");
const busController = require("../controllers/busController");
const router = express.Router();

router.get("/available/:seats", busController.getAvailableBuses);
router.post("/", busController.addBus);

module.exports = router;
