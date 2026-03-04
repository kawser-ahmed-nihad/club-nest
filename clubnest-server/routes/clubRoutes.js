const express = require("express");
const { createClub } = require("../controllers/clubsController");
const verifyFbToken = require("../middlewares/verifyFbToken");

const router = express.Router();

router.post("/clubs", verifyFbToken, createClub);

module.exports = router;