function greetMorning(name) {
	console.log(`Good Morning ${name}`);
}

function greetAfternoon(name) {
	console.log(`Good Afternoon ${name}`);
}

function greetEvening(name) {
	console.log(`Good Evening ${name}`);
}

function greet(name, cb) {
	console.log("Hello I am Ajith, thanks for coming here");
	cb(name);
}

greet("Bob", greetMorning);
greet("Bob", greetAfternoon);
greet("Susan", greetEvening);
