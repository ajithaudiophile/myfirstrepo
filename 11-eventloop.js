const { readFile, readFileSync } = require("fs");

console.log("Started first task");

//note readFileSync doesn't have a call back function
// const secondFile = readFileSync("./contents/second.txt", "utf8");
// console.log(secondFile);

//readFile does have a call back function
readFile("./contents/second.txt", "utf8", (err, res) => {
	if (err) {
		console.log(err);
		return;
	} else {
		console.log(res);
		console.log("completed first task");
	}
});
console.log("starting next task");
