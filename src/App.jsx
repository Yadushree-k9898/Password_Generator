import React, { useState } from "react";
import { UC, LC, SC, NC } from "./data/PassChar";
import "./App.css";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [specialCharacter, setSpecialCharacter] = useState(false);
  let [passwordLength, setPasswordLength] = useState(10);
  let [finalPass, setFinalPass] = useState("");

  let createPassword = () => {
    let finalPass = "";
    let charSet = "";
    if (uppercase || lowercase || number || specialCharacter) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (number) charSet += NC;
      if (specialCharacter) charSet += SC;
      for (let i = 0; i < passwordLength; i++) {
        finalPass += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }

      setFinalPass(finalPass);
    } else {
      alert("please select one checkbox");
    }
  };

  let copyPass = () => {
    navigator.clipboard.writeText(finalPass);
  };

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>

        <div className="passwordBoxin">
          <input type="text" readOnly value={finalPass} />
          <button onClick={copyPass}>Copy</button>
        </div>

        <div className="passLength">
          <label>Password Length</label>
          <input
            type="number"
            max={20}
            min={10}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="passLength">
          <label>Include Uppercase Letters</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Lowercase Letters</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="passLength">
          <label>Include Numbers</label>
          <input
            type="checkbox"
            checked={number}
            onChange={() => setNumber(!number)}
          />
        </div>
        <div className="passLength">
          <label>Include Symbols</label>
          <input
            type="checkbox"
            checked={specialCharacter}
            onChange={() => setSpecialCharacter(!specialCharacter)}
          />
        </div>

        <button className="btn" onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
