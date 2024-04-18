#! /usr/bin/env node

import inquirer from "inquirer"

let currencyRate : any = {
    PKR: 1,
    USD: 0.0036,
    EUR: 0.0034,
    GBP: 0.0029,
    AED: 0.013,
    SAR: 0.014,
    KWD: 0.0011,
    CAD: 0.0050,
    AUD: 0.0056,
    OMR: 0.0014,
}

let userAnswer : any = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "AED", "SAR", "KWD", "CAD", "AUD", "OMR", "PKR"],
        message: "Select your currency."
    },
    {
        name: "to",
        type: "list",
        choices: ["USD", "EUR", "GBP", "AED", "SAR", "KWD", "CAD", "AUD", "OMR", "PKR"],
        message: "Select the currency which you want to convert?"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount."
    }
])

let fromAmount: any = currencyRate[userAnswer.from]
let toAmount : any = currencyRate[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(`The converted amount is ${convertedAmount.toFixed(2)} ${userAnswer.to}`)