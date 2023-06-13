import React, { useState } from "react";

export default function Content(props) {
  const [text, setText] = useState("");

  const handleTextarea = (event) => {
    setText(event.target.value);
  };

  //Regex for checking if text contains any uppercase..
  const isUppercase = (text) => {
    return /[A-Z]/.test(text);
  };

  //Regex for checking if text contains any lowercase..
  const isLowercase = (text) => {
    return /[a-z]/.test(text);
  };

  const toUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to UPPERCASE 😂", "success");
  };

  const toLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase", "success");
  };

  const toggleCase = () => {
    let newtext = "";
    if (isUppercase(text)) {
      newtext = text.toLowerCase();
    }

    if (isLowercase(text)) {
      newtext = text.toUpperCase();
    }
    setText(newtext);
    props.showAlert("ToggledCase", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text is being read 😂", "primary");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces", "danger");
  };

  // function countWords(){
  //   let words = 0;
  //   if (text.endsWith(" "))
  //   {
  //     words = text.split(" ").length - 1;
  //     return words;
  //   }
  //   else if (text === "")
  //   {
  //     words = 0;
  //     return words;
  //   }
  //   else
  //   {
  //     words = text.split(" ").length;
  //     return words;
  //   }
  // };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.curMode === "light" ? "black" : "white",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleTextarea}
            id="myBox"
            rows="6"
            style={{
              backgroundColor: props.curMode === "light" ? "black" : "white",
              color: props.curMode === "dark" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={toUppercase}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toLowercase}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={toggleCase}>
          ToggleCase
        </button>
        <button className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="conatiner m-3"
        style={{
          color: props.curMode === "light" ? "black" : "white",
        }}
      >
        <h1>Text Summary</h1>
        <h5>Words</h5>
        <p>{text.split(" ").length} words</p>
        <h5>Characters</h5>
        <p>{text.length} characters</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </>
  );
}
