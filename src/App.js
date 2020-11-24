import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "양태욱",
    birthday: "940217",
    gender: "남자",
    job: "직장인",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "김보연",
    birthday: "950915",
    gender: "여자",
    job: "직장인",
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "양수민",
    birthday: "960316",
    gender: "여자",
    job: "봄이 집사",
  },
];

class App extends React.Component {
  render() {
    return (
      <div>
        {customers.map((val) => {
          return (
            <Customer
              key={val.id}
              id={val.id}
              image={val.image}
              name={val.name}
              birthday={val.birthday}
              gender={val.gender}
              job={val.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
