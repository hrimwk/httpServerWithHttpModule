const http = require("http");
const express = require("express");
const { createUser, createPost, getList } = require("./app");

const app = express();
app.use(express.json());

app.post("/signup", createUser);
app.post("/post", createPost);
app.get("/list", getList);

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("server is running on PORT 8000");
});
