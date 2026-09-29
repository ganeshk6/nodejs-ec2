const path = require('path');
const express = require("express");
const router = express.Router();
const rootDir = require('../utils/pathUtil');

router.get('/listings', (req, res, next) => {
    res.sendFile(path.join(rootDir, "./views/listing.html"));
});

module.exports = router;
