const userRouter = require("./userRouter");

const router = {
  run: function (req, res) {
    userRouter.run(req, res);
  },
  get: function (req, res, path, callback) {
    if (req.url === path && req.method === "GET") {
      callback(req, res);
    }
  },
};
module.exports = router;
