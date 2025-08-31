# Hallo TAysen
def wait_sek(sekunden: number):
    control.wait_micros(1000000 * sekunden)
print(":)")
wait_sek(1)
print(":(")
alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

word_list = ["kaka", "alex", "sandra", "banane", "apfel"]


word = word_list[randint(0, len(word_list) - 1)]

# creates an variable with an empty value
guesses = ''

# determine the number of turns
turns = 10
buttonklick = 0
auswahl = 0


    
# check if the turns are more than zero
while turns > 0:
    buttonklick = 0

    # make a counter that starts with zero
    failed = 0
    # Create a_word
    for char in word:

        # see if the character is in the players guess
        if char in guesses:

            # print then out the character
            print(char ),

        else:

            # if not found, print a dash
            print("_"),

            # and increase the failed counter with one
            failed += 1

            # if failed is equal to zero

    # print You Won
    if failed == 0:
        print("You won")
        # exit the script
        break
        # ask the user go guess a character
    print("auswahl:")
    print(alphabet[auswahl])   
    while buttonklick == 0:
        if input.button_is_pressed(Button.A):
            auswahl = auswahl +1
            print("auswahl:")
            print(alphabet[auswahl])
            wait_sek(1)
        elif input.button_is_pressed(Button.B):
            guess = (alphabet[auswahl])
            print("weiter gehts")
            buttonklick = 1
            wait_sek(1)
        


    # set the players guess to guesses
    guesses = guesses + guess

    # if the guess is not found in the secret word
    if guess not in word:

        # turns counter decreases with 1 (now 9)
        turns -= 1

        # print wrong
        print("Wrong")
        basic.show_icon(IconNames.SAD)


        # how many turns are left
      
        
        print("You have")
        print(turns)
        print("more guesses")
    
        # if the turns are equal to zero
        if turns == 0:
            # print "You Lose"
            print("You Lose")


def on_forever():
    pass
basic.forever(on_forever)
