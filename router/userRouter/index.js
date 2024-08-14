const router = require("../index.js");
const getUsers = require("../../controller/users/index.js");

const userRouter = {
  run(req, res) {
    router.get(req, res, "/users", getUsers(req, res));
  },
};

module.exports = userRouter;
