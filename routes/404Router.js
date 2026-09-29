const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../utils/pathUtil');

router.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "./views/404.html"));
});

module.exports = router;