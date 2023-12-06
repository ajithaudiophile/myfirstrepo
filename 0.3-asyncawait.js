const myFunction = () => {
	return new Promise((resolve, reject) => {
		let value = false;
		if (value) {
			resolve("My value is there");
		} else {
			reject("My value is not there");
		}
	});
};

const start = async () => {
	try {
		const result = await myFunction();
		console.log(result);
	} catch (error) {
		console.log(error);
	}
};

start();
