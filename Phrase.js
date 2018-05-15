const Letter = require("./Letter").Letter;

exports.Phrase = function (p) {
    const phrase = p.toUpperCase();

    let letterArray = [];

    for (let i = 0; i < phrase.length; i++) {
        letterArray.push(new Letter(phrase[i]));
    }

    this.checkGuess = function (guess) {
        let guessIsCorrect = false;
        for (let i = 0; i < letterArray.length; i++) {
            guessIsCorrect = letterArray[i].checkGuess(guess) || guessIsCorrect;
        }
        return guessIsCorrect;
    }

    this.toString = function () {
        let str = "";
        for (let i = 0; i < phrase.length; i++) {
            str += letterArray[i] + " ";
        }
        return str;
    }
}


// testing code - only run if not called as a require
if (require.main === module) {
    console.log('called directly');

    let test = new exports.Phrase("Hello Andrey!");
    console.log(test + "");
    test.checkGuess("h");
    console.log(test + "");
    test.checkGuess("h");
    console.log(test + "");
    test.checkGuess("e");
    console.log(test + "");
    test.checkGuess("x");
    console.log(test + "");
    test.checkGuess("A");
    console.log(test + "");
    test.checkGuess("l");
    console.log(test + "");
    test.checkGuess("n");
    console.log(test + "");
    test.checkGuess("y");
    console.log(test + "");
    test.checkGuess("o");
    console.log(test + "");
    test.checkGuess("n");
    console.log(test + "");
    test.checkGuess("z");
    console.log(test + "");
    test.checkGuess("!");
    console.log(test + "");
    test.checkGuess("d");
    console.log(test + "");
    test.checkGuess("r");
    console.log(test + "");


}
/*else {
    console.log('required as a module');
}*/