//NODE version
/*Logic modified from peterjacobson guessing game on github*/
const readline = require('readline');
var log = console.log;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'OHAI> '
});

var attempts = 3;
let randomNum = Math.floor(Math.random() * 10) + 1;
var i =0;
var recursiveAsyncReadLine = function () {
    rl.question('What number am i thinking of?', function (guess) {
        //while (i >= 3) {
            var userGuess = parseInt(guess);
            if (userGuess < randomNum) {
                console.log("Your guess is too low you have " + attempts + " left")
                console.log("--------------------------------------------------------------------");
            } else if (userGuess > randomNum) {
                console.log("Your guess is too high you have " + attempts + " left")
                console.log("--------------------------------------------------------------------");
            } else if ((!Number.isNaN(""))) {
                console.log("Thats not a number moron! you have " + attempts + " left");
                console.log("--------------------------------------------------------------------");
            } else {
                console.log("CORRECT!");
                console.log("Keep playing?");
                process.exit(0);
            }

            attempts--
            if (attempts == 0) {
                console.log("GAME OVER!")
                console.log("You have " + attempts + " left")
                rl.question('Continue, y for yes or n for no?', function (response) {
                    if (response == "y") {
                        return //recursiveAsyncReadLine();
                    } else {
                        process.exit(0);
                    }
                });

            }
        //}
        recursiveAsyncReadLine()


    });
};
recursiveAsyncReadLine();




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