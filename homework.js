// 실습 2: 반복·조건 렌더링
// 실행: node lab2_app.js
// /fruits 와 /empty 를 각각 접속해 비교해 볼 것

const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

const title = ["개인프로필", "프로젝트", "좋아하는 음식"];

app.get("/profile", (req, res) => {
  res.render("profile", { title: title[0], items: title });
});

app.get("/project", (req, res) => {
  res.render("project", { title: title[1], items: title });
});

app.get("/food", (req, res) => {
  res.render("food", { title: title[2], items: title });
});

app.get("/", (req, res) => {
  res.render("home", {
    items: title
  });
});

app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});