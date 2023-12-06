const { readFile } = require("fs");

const getContents = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, "utf8", (data, err) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

getContents("./contents/third.txt")
	.then((result) => console.log(data))
	.catch((err) => console.log("file does not exist"));
