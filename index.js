const router = require("./router/index.js");
const createServer = require("http").createServer;

const server = createServer((req, res) => {
  router.run(req, res);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on http://127.0.0.1:3000");
});
