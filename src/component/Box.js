import React from "react";
import "./Box.css";

const Box = (props) => {
  // console.log("props", props);
  return (
    <div>
      <h1 className="winner">{props.result}</h1>
      <div className="box" style={{ borderColor: props.bordercolor }}>
        <h1 className="title">{props.player}</h1>
        <img src={props.item?.img} />

        <div></div>
        <p></p>
      </div>
    </div>
  );
};

export default Box;
