const path = require("path");
const express = require('express');

const userRouter = require('./routes/userRouter');
const listngRouter = require('./routes/listingRouter');
const pageNotFound = require('./routes/404Router');
const rootDir = require('./utils/pathUtil');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(rootDir, "public")));

app.use("/", (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, "./views/home.html"));
});

app.use('/user', userRouter);
app.use('/', listngRouter);
app.use(pageNotFound);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});