#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "select one of the operators to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(
        chalk.green("Result: "),
        chalk.yellow(answer.firstNumber + answer.secondNumber)
    );
} else if (answer.operator === "Subtraction") {
    console.log(
        chalk.green("Result: "),
        chalk.yellow(answer.firstNumber - answer.secondNumber)
    );
} else if (answer.operator === "Multiplication") {
    console.log(
        chalk.green("Result: "),
        chalk.yellow(answer.firstNumber * answer.secondNumber)
    );
} else if (answer.operator === "Division") {
    console.log(
        chalk.green("Result: "),
        chalk.yellow(answer.firstNumber / answer.secondNumber)
    );
} else {
    console.log(chalk.red("Please select valid Operator"));
}