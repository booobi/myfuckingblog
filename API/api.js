const express = require('express');
const postsRouter = require('./posts');
const apiRouter = express.Router();
apiRouter.route('/').get((req, res) => {
    res.send("This is main api path");
    res.end();
});

apiRouter.use("/posts", postsRouter);

module.exports = apiRouter;