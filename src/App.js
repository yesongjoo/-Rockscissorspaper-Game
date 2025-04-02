import { useState, useEffect } from "react";
import "./App.css";
import Box from "./component/Box";

const options = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/61W8BVTF10L._AC_UF894,1000_QL80_.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://rukminim3.flixcart.com/image/750/900/jctemq80/scissor/e/r/d/scissor-cissor-goldcave-original-imaffty5xq9sekww.jpeg?q=20&crop=false",
  },
  paper: {
    name: "Paper",
    img: "https://i.ebayimg.com/images/g/G5kAAOSwmoRexd9C/s-l1200.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [userResult, setUserResult] = useState(null);
  const [computerResult, setComputerResult] = useState(null);
  const [usercolor, setUsercolor] = useState("black");
  const [computercolor, setComputercolor] = useState("black");

  const play = (userChoice) => {
    const keyarray = Object.keys(options);
    let computerChoice =
      keyarray[Math.floor(Math.random() * Object.keys(options).length)];

    setUserSelect(options[userChoice]);
    setComputerSelect(options[computerChoice]);

    showResult(userChoice, computerChoice);
  };

  const showResult = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      setUserResult("tied");
      setComputerResult("tied");
    } else if (
      (userChoice === "scissors" && computerChoice === "paper") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      setUserResult("win 🎉");
      setComputerResult("lost 😞");
    } else {
      setUserResult("lost 😞");
      setComputerResult("win 🎉");
    }
  };

  useEffect(() => {
    if (userResult === "win 🎉") {
      setUsercolor("red");
      setComputercolor("black");
    } else if (computerResult === "win 🎉") {
      setComputercolor("red");
      setUsercolor("black");
    } else {
      setUsercolor("black");
      setComputercolor("black");
    }
  }, [userResult, computerResult]); // userResult와 computerResult가 변경될 때마다 실행

  return (
    <div className="container">
      <div className="players-wrap">
        <Box
          player="you"
          item={userSelect}
          result={userResult}
          bordercolor={usercolor}
        />
        <Box
          player="computer"
          item={computerSelect}
          result={computerResult}
          bordercolor={computercolor}
        />
      </div>

      <div className="buttons">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
