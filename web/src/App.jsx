import React, { useEffect, useState } from "react";
import "./app.css";

import axios from "axios";
import { exampleList } from "./component/exampleList";
// import { Highlight } from "./component/index";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState([]);
  const [example, setExample] = useState("");

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputText === "") {
      alert("Please input some text!");
    } else {
      setOutputText("Loading...");

      axios
        .post("/api", { inputText })
        .then((res) => {
          // console.log("Model output:", res.data);
          setOutputText(res.data);

          // let evalData = eval(res.data)
          // console.log("Model output:", evalData);
          // setOutputText(evalData);
        })
        .catch((err) => console.log(err));
    }
  };

  const changeExampleHandler = (event) => {
    setExample(event.target.value);
  };

  useEffect(() => {
    const selectedItem = exampleList.find((item) => item.label === example);

    if (selectedItem === undefined) console.log("Do nothing");
    else {
      const { label, content } = selectedItem;
      console.log("Label:", label);
      console.log("Content:", content);
      document.getElementById("model-input").textContent = content;
      setInputText(content);
    }
  }, [example]);

  return (
    <div className="App col-wrapper">
      <header>
        <h5>Name Entity Recognition</h5>
      </header>

      <div className="content">
        <div className="wrapper">
          <div className="row-wrapper">
            <h3>Input sentence below</h3>
            <span style={{ padding: "0 2rem", color: "var(--color-grey)" }}>
              Or
            </span>
            <select
              name="example"
              id="example"
              className="dropdown"
              onChange={changeExampleHandler}
            >
              {exampleList.map((example, index) => (
                <option key={index}>{example.label}</option>
              ))}
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
                onChange={handleChange}
              />
            </div>
            <button className="button-style" type="submit">
              Run Model
            </button>
          </form>
        </div>

        <div className="wrapper">
          <div className="row-wrapper">
            <h3>Model Output</h3>
          </div>
          <div className="text-field wrapper">
            <p className="output-field">
              {/* <Output input={inputText}>{outputText}</Output> */}
              {/* <Highlight label="ORG">This is an entity</Highlight> */}
              {/* {outputText.map((output, index) => {
                <div key={index}>{output}</div>
              })} */}
              {outputText}
              {/* 
              TODO Make output readable
              */}
            </p>
          </div>
        </div>
      </div>

      <footer>
        <h6 className="row-wrapper">
          Thành viên nhóm:
          <span style={{ padding: "0 2rem" }}></span>
          <div className="wrapper">
            20120330 - Phạm Anh Minh <br />
            20120475 - Nguyễn Minh Hiếu
          </div>
        </h6>
      </footer>
    </div>
  );
};

export default App;
