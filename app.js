import readline from "readline-sync"

console.log("Hello friend! What's your name?")

const name = readline.question("Enter your name: ")

console.log(`Nice to meet you, ${name}!`)
console.log("What is your favorite video game?")

const favoriteGame = readline.question("Enter your favorite video game: ")

if (favoriteGame === "The Legend of Zelda") {
    console.log("It's dangerous to go alone! Take this.")
    console.log("   ^ ")
    console.log("  | |")
    console.log("  | |")
    console.log("  | |")
    console.log("  | |")
    console.log("  | |")
    console.log("  | |")
    console.log("<--8-->")
    console.log("   0")
    console.log("   0")
    console.log("   @")
} else if (favoriteGame === "Super Mario") {
    console.log("It's-a me, Mario!")
    console.log("─▄████▄▄░")
    console.log("▄▀█▀▐└─┐░░")
    console.log("█▄▐▌▄█▄┘██")
    console.log("└▄▄▄▄▄┘███")
    console.log("██▒█▒███▀")
}
