#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your setence to count words:",
    },
]);
const word = answer.sentence.trim().split(" ");
console.log(word);
console.log(`Your word counts are ${word.length}.`);
