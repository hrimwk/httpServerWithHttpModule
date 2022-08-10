const users = [
  {
    id: 1,
    name: "User1",
    email: "test1@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "User2",
    email: "test2@gmail.com",
    password: "123qwe",
  },
];

const posts = [
  {
    id: 1,
    title: "간단한 HTTP API 개발 시작!",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createUser = (req, res) => {
  const user = req.body.data;

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
  console.log("after:", users);
  res.json({ message: "USER_CREATE" });
};

const createPost = (req, res) => {
  const post = req.body.data;

  posts.push({
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
  });

  console.log("after:", posts);
  res.json({ message: "CONTENT_CREATE" });
};
const getList = (req, res) => {
  res.json({
    data: [
      {
        userID: 1,
        userName: "user1",
        postingId: 1,
        postingTitle: "간단한 HTTP API 개발 시작!",
        postingContent:
          "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
      },
      {
        userID: 2,
        userName: "user2",
        postingId: 2,
        postingTitle: "HTTP의 특성",
        postingContent: "Request/Response와 Stateless!!",
      },
      {
        userID: 3,
        userName: "user3",
        postingId: 3,
        postingTitle: "내용1",
        postingContent: "content!1",
      },
      {
        userID: 4,
        userName: "user4",
        postingId: 4,
        postingTitle: "내용2",
        postingContent: "content2!",
      },
    ],
  });
};

module.exports = { createUser, createPost, getList };
