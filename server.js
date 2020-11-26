const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/hello", (req, res) => {
//   res.send({ message: "hello Express !" });
// });

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "양태욱",
      birthday: "940217",
      gender: "남자",
      job: "직장인",
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "김보연",
      birthday: "950915",
      gender: "여자",
      job: "직장인",
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "양수민",
      birthday: "960316",
      gender: "여자",
      job: "봄이 집사",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
