const path = require("path");
const rootDir = require('../utils/pathUtil');

const express = require("express");
const router = express.Router();

router.get("/profile", (req, res) => {
    res.sendFile(path.join(rootDir, "./views/profile.html"));
});

router.get("/settings", (req, res) => {
    res.sendFile(path.join(rootDir, "./views/setting.html"));
});

module.exports = router;