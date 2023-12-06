//Normal function without any parameter
// function name() {
// 	console.log("hi this is my name");
// }

// name();

//arrow function without any parameter
// const greeting = () => {
// 	console.log("this is my name");
// };

// greeting();

//normal funtion with parameter

// function sum(num1, num2) {
// 	console.log(`Sum is ${num1 + num2}`);
// }

// sum(2, 3);

//arrow funtion with parameter

// const sum = (num1, num2) => {
// 	console.log(`Sum is ${num1 + num2}`);
// };

// sum(2, 3);

//normal function returns a value

// function sum(num1, num2) {
// 	return num1 + num2;
// }

// const result = sum(2, 3);
// console.log(result);

//arrow function returns a value

// let result = (num1, num2) => {
// 	return num1 + num2;
// };

//arrow function returns a value but we can omit the return statement and make it single line

let result = (num1, num2) => num1 + num2;

console.log(result(2, 3));
