let failed: number;
let guess: string;
//  Hallo TAysen
function wait_sek(sekunden: number) {
    control.waitMicros(1000000 * sekunden)
}

console.log(":)")
wait_sek(1)
console.log(":(")
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let word_list = ["kaka", "alex", "sandra", "banane", "apfel"]
let word = word_list[randint(0, word_list.length - 1)]
//  creates an variable with an empty value
let guesses = ""
//  determine the number of turns
let turns = 10
let buttonklick = 0
let auswahl = 0
//  check if the turns are more than zero
while (turns > 0) {
    buttonklick = 0
    //  make a counter that starts with zero
    failed = 0
    //  Create a_word
    for (let char of word) {
        //  see if the character is in the players guess
        if (guesses.indexOf(char) >= 0) {
            //  print then out the character
            console.log(char)
        } else {
            //  if not found, print a dash
            console.log("_")
            //  and increase the failed counter with one
            failed += 1
        }
        
    }
    //  if failed is equal to zero
    //  print You Won
    if (failed == 0) {
        console.log("You won")
        //  exit the script
        break
    }
    
    //  ask the user go guess a character
    console.log("auswahl:")
    console.log(alphabet[auswahl])
    while (buttonklick == 0) {
        if (input.buttonIsPressed(Button.A)) {
            auswahl = auswahl + 1
            console.log("auswahl:")
            console.log(alphabet[auswahl])
            wait_sek(1)
        } else if (input.buttonIsPressed(Button.B)) {
            guess = alphabet[auswahl]
            console.log("weiter gehts")
            buttonklick = 1
            wait_sek(1)
        }
        
    }
    //  set the players guess to guesses
    guesses = guesses + guess
    //  if the guess is not found in the secret word
    if (word.indexOf(guess) < 0) {
        //  turns counter decreases with 1 (now 9)
        turns -= 1
        //  print wrong
        console.log("Wrong")
        basic.showIcon(IconNames.Sad)
        //  how many turns are left
        console.log("You have")
        console.log(turns)
        console.log("more guesses")
        //  if the turns are equal to zero
        if (turns == 0) {
            //  print "You Lose"
            console.log("You Lose")
        }
        
    }
    
}
basic.forever(function on_forever() {
    
})
