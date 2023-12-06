const { readFileSync, writeFileSync } = require("fs");
const firstfile = readFileSync("./contents/first.txt", "utf8");
const secondFile = readFileSync("./contents/second.txt", "utf8");
console.log(firstfile, secondFile);

//writeFileSync is for creating a new file. If file doesn't exist node will create.
// If file is there, it will be over written. Use append to append to file
