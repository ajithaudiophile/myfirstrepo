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

myFunction()
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log(error);
	});
