import readline from "readline-sync"

console.log("Hello friend! What's your name?")

const name = readline.question("Enter your name: ")

console.log(`Nice to meet you, ${name}!`)