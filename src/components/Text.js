import React, { useState } from "react";

export default function Form(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleCapitalizeClick = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("All Clear", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy text", "success");
  };

  const handleOnchange = (event) => {
    console.log("OnChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>{props.heading} </h2>
        <div>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnchange}
              style={{
                backgroundColor: props.mode === "dark" ? "#0d385c" : "white",
                color: props.mode === "dark" ? "white" : "black",
              }}
              id="myBox"
              rows="5"
            ></textarea>
          </div>
          <button disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2  my-1 "
            onClick={handleUpClick}
          >
            Change to UpperCase
          </button>
          <button  disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2 my-1"
            onClick={handleLoClick}
          >
            Change to LowerCase
          </button>
          <button disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2 my-1"
            onClick={handleCapitalizeClick}
          >
            Capitalize Case
          </button>
          <button disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2 my-1"
            onClick={handleCopyText}
          >
            Copy text
          </button>
          <button disabled={text.length===0}
            type="submit"
            className="btn btn-primary mx-2 my-1"
            onClick={handleClearClick}
          >
            Clear text
          </button>
        </div>
        <div className="my-2">
          <h3>Your Summary </h3>
          <p>
            {text.split(" ").filter((element)=>{return element.length!==0}).length} words & {text.length} Character
          </p>
          <p>You read this in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h4>Preview</h4>
          <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
        </div>
      </div>
    </>
  );
}
