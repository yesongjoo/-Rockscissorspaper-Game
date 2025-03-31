import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const options = {
  rock: {
    name: "Rock",
    img: "https://m.media-amazon.com/images/I/61W8BVTF10L._AC_UF894,1000_QL80_.jpg",
  },
  cissors: {
    name: "Cissors",
    img: "https://rukminim3.flixcart.com/image/750/900/jctemq80/scissor/e/r/d/scissor-cissor-goldcave-original-imaffty5xq9sekww.jpeg?q=20&crop=false",
  },
  paper: {
    name: "Paper",
    img: "https://i.ebayimg.com/images/g/G5kAAOSwmoRexd9C/s-l1200.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    console.log("선택한 옵션:", userChoice);
    setUserSelect(options[userChoice]);
  };
  return (
    <div className="container">
      <div className="players-wrap">
        <Box player="you" item={userSelect} />
        <Box player="computer" />
      </div>

      <div className="buttons">
        <button onClick={() => play("cissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
