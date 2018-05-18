const Phrase = require("./Phrase");
const prompt = require('prompt');

//
// Start the prompt
//
prompt.colors = false;
prompt.message = "";
prompt.delimiter = "";
prompt.start();


// a puzzle object, essentially an array with the ability to return 
// random member of the list
function Puzzles() {
    this.words = ["gallows",
        "scaffold",
        "execution",
        "hangman",
        "rope",
        "justice",
        "crime",
        "hanging",
        "drop",
        "criminal",
        "neck",
        "asphyxiation",
        "punishment",
        "strangulation",
        "capital",
        "felon",
        "death",
        "trapdoor",
        "snapped",
        "decapitation",
        "slack",
        "noose",
        "tighten",
        "pole"];
}

Puzzles.prototype.getRandom = function () {
    return this.words[Math.floor(Math.random() * this.words.length)].toUpperCase();
};

const puzzles = new Puzzles();
const maxIncorrect = 9;
let numIncorrect = 0;
let word = null;
let wordPuzzle = null;


//
// Get letter input and check it
function getUserInput() {

    const schema = {
        properties: {
            Letter: {
                type: 'string', 
                description: 'Pick a letter:',
                pattern: /^[a-zA-Z]$/,
                message: 'Input must be only single letters.',
                required: true
            }
        }
    };

    prompt.get(schema, function (err, result) {
        //console.log('  Letter: ' + result.Letter);

        let isGoodGuess = wordPuzzle.checkGuess(result.Letter);

        if (wordPuzzle.isPuzzleFinished()) {
            console.log(`Congratulations!  You successfully solved ${word}.\n`);
            wouldYouLikeToPlayAgain();
            return;
        }
        else if (isGoodGuess) {
            console.log(`${result.Letter} is correct.`);
            console.log(`${wordPuzzle}\n`);
            getUserInput();
        }
        else {
            console.log(`${result.Letter} is incorrect.`);
            numIncorrect++;
            if (numIncorrect < maxIncorrect) {
                console.log(`${wordPuzzle}`);
                let guessesLeft = maxIncorrect - numIncorrect;
                console.log(`You only have ${guessesLeft} of guesses left.\n`);
                getUserInput();
            }
            else {
                console.log(`YOU LOSE!  The puzzle was ${word}.\n`);
                wouldYouLikeToPlayAgain();
                return;
            }
        }
    });
}

function wouldYouLikeToPlayAgain () {
    const schema = {
        properties: {
            yesOrNo: {
                type: 'string', 
                description: 'Would you like to play again? Y or N:',
                pattern: /^[ynYN]$/,
                message: 'Input must be only Y or N.',
                required: true
            }
        }
    };

    prompt.get(schema, function (err, result) {

        if (result.yesOrNo.toUpperCase() == "Y") {
            init();
        } 
    });
}


function init() {

    numIncorrect = 0;
    word = puzzles.getRandom();
    wordPuzzle = new Phrase(word);

    console.log(`
**************************
Command Line Hangman!

Instructions: 
Choose letters. You get only
${maxIncorrect} incorrect responses
before you lose.  Good Luck! 
**************************

    `);

    getUserInput();
}
init();