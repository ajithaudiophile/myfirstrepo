const { readFile } = require("fs");

const getContents = (path) => {
	return new Promise((resolve, reject) => {
		readFile(path, "utf8", (err, data) => {
			if (err) {
				reject(err);
			} else {
				resolve(data);
			}
		});
	});
};

const start = async () => {
	try {
		const first = await getContents("./contents/first.txt");
		const second = await getContents("./contents/second.txt");
		console.log(first, second);
	} catch (error) {
		console.log(error);
	}
};

start();
// getContents("./contents/second.txt")
// 	.then((result) => console.log(result))
// 	.catch((err) => console.log(err));
