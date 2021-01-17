//You are going to write program, not a web page , only pure javascript, it’s a guessing game . 
//You re program should should run until the user don’t want to play anymore. 
//So you going to have a random number from 1-10 , 
//if the user don’t guess the number in 3 tries then he or she loses and you should ask the user 
//if they want to play again if yes keep playing other wise just kill the program

//You are going to write program, not a web page , only pure javascript, it’s a guessing game . 
//You re program should should run until the user don’t want to play anymore. 
//So you going to have a random number from 1-10 , 
//if the user don’t guess the number in 3 tries then he or she loses and you should ask the user 
//if they want to play again if yes keep playing other wise just kill the program


// var computerNum;

// //variables to hold wins and losses. Start at 0
// var wins = 0;
// var losses = 0;

var randomNum = Math.floor(Math.random() * 10) + 1;
function guessNumber() {
    var userGuess = parseInt(prompt("I'm thinking of a number between 1 and 10, what is it?"));

    //logic to check which are correct and not correct
    if (userGuess < randomNum) {
        alert("your guess is too low");
    }else if(userGuess > randomNum) {
        alert("your guess is too high");
    }else {
        alert("CORRECT!");
        return; //this is to break that loop
    }
    

}
for (var i = 0; i < 10; i++) {
    //If it is after the user's 3rd or 6th turn
    if (i == 3 || i == 6 || i == 9) {
        if (!confirm("Do you still want to keep playing?")) {
            break;
        }
    }
    guessNumber(randomNum);
}

    // if((userGuess < randomNum) && (numOfGuesses == 1)) {
    //     alert("no")
    // } else if ((userGuess > randomNum) && (numOfGuesses == 2)) {
    //     //alert("nope")
    // } else if(numOfGuesses == 3) {
 
    //     var end = prompt("press any key to continue?")
        
    // }
    
