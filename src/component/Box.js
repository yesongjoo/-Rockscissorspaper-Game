import React from "react";
import "./Box.css";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className="box">
      <p className="title">{props.player}</p>
      <img src={props.item?.img} />
      <p>winner</p>
      <div></div>
      <p></p>
    </div>
  );
};

export default Box;
