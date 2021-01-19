//NODE version
/*Logic modified from peterjacobson guessing game on github*/
//npm installs
const readline = require('readline');
const Confirm = require('prompt-confirm');
const prompt = new Confirm("Want to play again?");

const question = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//generates random number between 1 and 10
let randomNum = Math.floor(Math.random() * 10) + 1;
var attempts = 3;

question.setPrompt("I am thinking of a number between 1 and 10, what is it?");
question.prompt();
question.on('line', function (guess) {
    var userGuess = parseInt(guess);

    //logic to check which are correct and not correct
    if (userGuess < randomNum) {
        console.log("your guess is too low");
        console.log("you have " + attempts + " attempts left")
    } else if (userGuess > randomNum) {
        console.log("your guess is too high");
        console.log("You have " + attempts + " attempts left")
    } else {
        console.log("CORRECT!");
        process.exit(0);
    }

    attempts--
    if (attempts == 0) {
        console.log("GAME OVER");
        console.log("You have no attempts left");
        process.exit(0);
    }

    question.prompt()

});

//guessNumber(randomNum)
    // for (var i = 0; i < 10; i++) {
    //     //If it is after the user's 3rd or 6th turn
    //     if (userGuess == randomNum) {
    //         const prompt = new Confirm("Would you like to keep playing?");
    //         prompt.ask(function (answer) {
    //             console.log(answer);
    //         })
    //     }
    //     //guessNumber(randomNum);
    // }












// WEB VERSION
// var randomNum = Math.floor(Math.random() * 10) + 1;
// function guessNumber() {
//     var userGuess = parseInt(prompt("I'm thinking of a number between 1 and 10, what is it?"));

//     //logic to check which are correct and not correct
//     if (userGuess < randomNum) {
//         alert("your guess is too low");
//     }else if(userGuess > randomNum) {
//         alert("your guess is too high");
//     }else {
//         alert("CORRECT!");
//         return; //this is to break that loop
//     }


// }
// for (var i = 0; i < 10; i++) {
//     //If it is after the user's 3rd or 6th turn
//     if (i == 3 || i == 6 || i == 9) {
//         if (!confirm("Do you still want to keep playing?")) {
//             break;
//         }
//     }
//     guessNumber(randomNum);
// }