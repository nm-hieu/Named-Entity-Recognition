const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const { spawn } = require("child_process"); // To run python script

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});

app.post("/api", (req, res) => {
  const inputText = req.body.inputText;

  let dataToSend;
  // spawn new child process to call the python script
  const python = spawn("python", [__dirname + "/output/NER.py", inputText]);

  // collect data from script
  python.stdout.on("data", (data) => {
    console.log("Pipe data from python script ...");
    dataToSend = data.toString();
  });

  // show error
  python.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  // in close event we are sure that stream is from child process is closed
  python.on("close", (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend);
  });
  // return res.json("It's returning");
});
