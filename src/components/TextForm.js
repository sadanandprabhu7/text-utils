import React, { useState } from "react";

export default function TextForm(prop) {
  const [Text, setText] = useState("Enter Your Text");
  const handlerOnclickUpper = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handlerOnclickLower = () => {
    let newText = Text.toLocaleLowerCase();
    setText(newText);
  };
  const handlerOnclickClear = () => {
    setText("");
  };
  const handlerOnclickRemoveExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handlerOnclickCopyText = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handlerOnchange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{ color: prop.mode === "dark" ? "black" : "white" }}
      >
        <h1>{prop.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={Text}
            onChange={handlerOnchange}
            id="mybox"
            rows="8"
            style={{
              backgroundColor: prop.mode === "dark" ? "white" : "grey",
              color: prop.mode === "dark" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handlerOnclickUpper}>
          change to uper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlerOnclickLower}>
          change to lower case
        </button>
        <button className="btn btn-primary mx-2" onClick={handlerOnclickClear}>
          Clear
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handlerOnclickRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handlerOnclickCopyText}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: prop.mode === "dark" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {Text.split(" ").length} words, {Text.length} characters{" "}
        </p>
        <h1>Preview</h1>
        <p>{Text}</p>
      </div>
    </>
  );
}
