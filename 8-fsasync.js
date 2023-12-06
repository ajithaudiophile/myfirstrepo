const { readFile, writeFile } = require("fs");
readFile("./contents/first.txt", "utf8", (error, result) => {
	if (error) {
		console.log(error);
		return;
	}
	const first = result;
});

readFile("./contents/second.txt", "utf8", (error, result) => {
	if (error) {
		console.log(error);
		return;
	}
	const second = result;
});

writeFile(
	"./contents/async-result.txt",
	"this is my result",
	(error, result) => {
		if (error) {
			console.log(error);
			return;
		}
		console.log(result);
	}
);
