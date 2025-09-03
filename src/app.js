import readline from "readline-sync"

import { gameGenerator } from "./games.js"

console.log("Hello friend! What's your name?")

const name = readline.question("Enter your name: ")

console.log(`Nice to meet you, ${name}!`)
console.log("What is your favorite video game?")

const favoriteGame = readline.question("Enter your favorite video game: ")

console.log(gameGenerator(favoriteGame))
