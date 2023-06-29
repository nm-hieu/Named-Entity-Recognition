import React, { useState } from "react";

import "./app.css";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setOutputText(`${inputText}`);
    console.log(inputText);
    console.log(outputText);
  }

  return (
    <div className="App col-wrapper">
      <header>
        <h5>Name Entity Recognition</h5>
      </header>

      <div className="content">
        <div className="wrapper">
          <div className="row-wrapper">
            <h3>Input sentence below</h3>
            <span style={{ padding: "0 2rem", color: "var(--color-grey)" }}>Or</span>
            <select name="example" id="example" className="dropdown">
              <option value="example-1">Example 1</option>
              <option value="example-2">Example 2</option>
              <option value="example-3">Example 3</option>
            </select>
          </div>

          <form className="wrapper" onSubmit={handleSubmit}>
            <div className="text-field">
              <textarea
                rows="10"
                type="text"
                id="model-input"
                name="model-input"
                placeholder="Input goes here..."
                onChange={(event) => setInputText(event.target.value)}
              />
            </div>
            <button className="button-style" type="submit">
              Run Model
            </button>
          </form>
        </div>

        <div className="wrapper">
          <div className="row-wrapper space-between">
            <h3>Model Output</h3>
            <button className="dropdown">Entity Filter</button>
          </div>
          <div className="text-field wrapper">
            <p className="output-field">{outputText}</p>
          </div>
        </div>
      </div>

      <footer>
        <h6 className="row-wrapper">
          Thành viên nhóm:
          <span style={{ padding: "0 2rem" }}></span>
          <div className="wrapper">
            Phạm Anh Minh - 20120330
            <br /> <br />
            Nguyễn Minh Hiếu - 20120475
          </div>
        </h6>
      </footer>
    </div>
  );
};

export default App;
