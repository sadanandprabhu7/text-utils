import React, { useState } from "react";

export default function TextForm(prop) {
  const [Text, setText] = useState("Enter Your Text");
  const handlerOnclickUpper = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    prop.showAlert("converted into upper case", "success");
  };
  const handlerOnclickLower = () => {
    let newText = Text.toLocaleLowerCase();
    setText(newText);
    prop.showAlert("converted into lower case", "success");
  };
  const handlerOnclickClear = () => {
    setText("");
    prop.showAlert("text cleared", "success");
  };
  const handlerOnclickRemoveExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    prop.showAlert("removed extra spaces", "success");
  };
  const handlerOnclickCopyText = () => {
    let newText = document.getElementById("mybox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    prop.showAlert("text copied", "success");
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
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlerOnclickUpper}
        >
          change to uper case
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlerOnclickLower}
        >
          change to lower case
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlerOnclickClear}
        >
          Clear
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handlerOnclickRemoveExtraSpaces}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={Text.length === 0}
          className="btn btn-primary mx-2 my-1"
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
          {
            Text.split(/\s+/).filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          words, {Text.length} characters{" "}
        </p>
        <h1>Preview</h1>
        <p>{Text}</p>
      </div>
    </>
  );
}
