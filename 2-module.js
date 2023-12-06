// const { john, peter } = require("./3-names"); // destructuring way of getting values
const names = require("./3-names");
const sayHello = require("./4-utils");
const data = require("./5-alternative");
require("./6-mindgrenade"); //just by importing, the function is executed since the function is called within mindgrenade
console.log(data.items[0]);
console.log(data.person.name);
console.log(data.person.age);
console.log(data);
console.log(names.john); // access object properties instead of destructuring
console.log(names.peter); // aaccess object properties instead of destructuring

sayHello(names.john);
sayHello(names.peter);
sayHello(names.susan);
