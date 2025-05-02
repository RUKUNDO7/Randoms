// const {generateRandomNumber, celciusToFahrenheit} = require('./utils');
// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`);

//import {getPosts}  from "./postController.js";// imported as not default
import getPosts, {getPostsLength}  from "./postController.js";
console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);