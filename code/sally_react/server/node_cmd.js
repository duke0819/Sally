const express = require("express");
var cmd = require("node-cmd");
const fs = require("fs");

cmd.run(
  /////////////// python shell script ///////////////
  "/Users/seon-uchan/opt/anaconda3/bin/python /Users/seon-uchan/Desktop/FullStack/Sally/code/res_vege/res_vege3.py",
  ///////////////////////////////////////////////////
  function (error, success, stderr) {
    if (error) {
      console.log("ERROR :\n\n", error);
    } else {
      const cmd_result = console.log(success);
    }
  }
);

// fs.readFile('./package3.json', 'utf8', (error, jsonFile) => {
//   if (error) return console.log(error);
//   console.log(jsonFile);

//   const jsonData = JSON.parse(jsonFile);
//   console.log(jsonFile);

//   const todos = jsonData.todos;
//   todos.forEach(todo => {
//       console.log(todo);
//   });
// });
