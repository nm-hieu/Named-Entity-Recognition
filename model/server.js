const express = require("express")
const cors = require('cors')
const port = 3000;
const { spawn } = require("child_process"); // To run python script

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, function() {
  console.log("Server is running on port:", port);
});

// [ ] Run script on server.js
// [ ] Return res.json to frontend

app.post("/", (req, res) => {
  const inputText = req.body.inputText;
  if (inputText.length > 0) return res.json("success");
  else res.json("No input available");

//   let dataToSend;
//   // spawn new child process to call the python script
//   const python = spawn("python", ["NER.py", inputText]);

//   // collect data from script
//   python.stdout.on("data", function (data) {
//     console.log("Pipe data from python script ...");
//     dataToSend = data.toString();
//   });

//   // in close event we are sure that stream is from child process is closed
//   python.on("close", (code) => {
//     console.log(`child process close all stdio with code ${code}`);
//     // send data to browser
//     // res.send(largeDataSet.join(""));
//     res.send(dataToSend);
//   });
  return res.json("It's returning");
});
