/**
 * The main application file for the game ASCII art generator.
 */

import readline from "readline-sync"

import { gameGenerator } from "./games.js"

console.log("Hello friend! What's your name?")

const name = readline.question()

console.log(`Nice to meet you, ${name}!` + "\n" + "What is your favorite video game?")

const favoriteGame = readline.question()

console.log(gameGenerator(favoriteGame))
