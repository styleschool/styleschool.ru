import React from "react";

export default function Paragraph(props) {
  const style = {
    padding: "5px 0",
    fontSize: "1em",
    color: props.color ? props.color : "rgb(100,100,100)",
    fontWeight: 400,
    textAlign: props.j
      ? "justify"
      : props.r
        ? "right"
        : props.c
          ? "center"
          : "left",
    margin: 0,
    ...props.style
  };
  const className = props.classElement || "";
  return (
    <div style={{ ...props.styleBox }}>
      {props.content.map((el, i) => (
        <div style={style} key={i} className={className}>
          {el}
        </div>
      ))}
    </div>
  );
}
