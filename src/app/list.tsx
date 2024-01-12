import React from "react";

export default function List(props) {
  var type;
  if (props.num === true) {
    type = "decimal";
  } else if (props.num === false || props.num === undefined) {
    type = "disc";
  } else {
    type = props.num;
  }
  return (
    <ol style={{ listStyleType: type, margin: 0, ...props.olStyle }}>
      {props.arr.map((text, index) => (
        <li style={props.style} key={index} className={props.classLi}>
          {text}
        </li>
      ))}
    </ol>
  );
}
