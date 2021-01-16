function game() {
    let numOfGuesses;
    let inputNum;
    
    for(numOfGuesses=1; numOfGuesses < 10; numOfGuesses++) {
    var userGuess = prompt("I'm thinking of a number between 1 and 10, what is it?");
    
    var randomNum = Math.floor(Math.random() * 10) + 1;
    
    let number = parseInt(userGuess);
    //numOfGuesses++;
    
    console.log(randomNum)
    var inputEnd;
    
    if (userGuess < randomNum) {
        alert("your guess is too low")
    }else if(userGuess > randomNum) {
        alert("your guess is too high")
    }else {
        alert("CORRECT!")
    }
    
    if (numOfGuesses >= 3 || numOfGuesses == 3) {
        var end = prompt("would you like to continue yes or no?")
    } 
    
    } 
}
game();

    // if((userGuess < randomNum) && (numOfGuesses == 1)) {
    //     alert("no")
    // } else if ((userGuess > randomNum) && (numOfGuesses == 2)) {
    //     //alert("nope")
    // } else if(numOfGuesses == 3) {
 
    //     var end = prompt("press any key to continue?")
        
    // }