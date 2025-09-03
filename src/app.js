import readline from "readline-sync"

import { gameGenerator } from "./games"

console.log("Hello friend! What's your name?")

const name = readline.question("Enter your name: ")

console.log(`Nice to meet you, ${name}!`)
console.log("What is your favorite video game?")

const favoriteGame = readline.question("Enter your favorite video game: ")

gameGenerator(favoriteGame)
