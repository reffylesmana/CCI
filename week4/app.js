// commonjs

// const {add, phi} = require('./function/math.js');

// console.log(add(2, 3));
// console.log(phi);


// ES6 Modules
// import {add, phi} from './function/math.js';

// console.log(add(2, 3));
// console.log(phi);

// import reffy from './function/math.js';
// console.log(reffy(2,3));


// import fs from "node:fs";
// import os from "node:os";

// const userInfo = `Username: ${os.userInfo().username}
// Platform: ${os.platform()}
// Architecture: ${os.arch()}`;

// fs.writeFile("data.txt", userInfo, (err) => {
//     if (err) {
//         console.error(err);
//     }
// });

// fs.readFile("data.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(data);
//     }
// });

import chalk from "chalk";

const error = chalk.bold.red;
const warning = chalk.yellow;
const success = chalk.green;

console.log(error("Error: Something went wrong!"));
console.log(warning("Warning: This is a warning!"));
console.log(success("Success: Operation completed successfully!"));


console.log(chalk.blue("Hello, World!"));

console.log(chalk.blue("Hello, ") + chalk.green("World") + chalk.red("!!!"));