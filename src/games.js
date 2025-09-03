/**
 * The gameGenerator function generates a game-themed ASCII art based on the user's favorite game.
 */

export function gameGenerator(favoriteGame) {
    if (favoriteGame === "The Legend of Zelda") {
        const text = "It's dangerous to go alone! Take this."
        const swordTip = "   ^ "
        let swordBlade = "  | |"
        const swordGuard = "<--8-->"
        let swordHandle = "   0"
        const swordPommel = "   @"

        for (let i = 0; i < 4; i++) {
            swordBlade += "\n" + "  | |"
        }

        for (let i = 0; i < 1; i++) {
            swordHandle += "\n" + "   0"
        }

        const zelda = text + "\n" + swordTip + "\n" + swordBlade + "\n" + swordGuard + "\n" + swordHandle + "\n" + swordPommel + "\n"

        return zelda
    } else if (favoriteGame === "Super Mario") {
        const text = "It's-a me, Mario!"
        const hat = "─▄████▄▄░"
        const upperFace = "▄▀█▀▐└─┐░░"
        const lowerFace = "█▄▐▌▄█▄┘██"
        const neck = "└▄▄▄▄▄┘███"
        const chest = "██▒█▒███▀"

        const mario = text + "\n" + hat + "\n" + upperFace + "\n" + lowerFace + "\n" + neck + "\n" + chest + "\n"
        
        return mario
    }
}

