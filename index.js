const Phrase = require("./Phrase").Phrase;

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
    return this.words[Math.floor(Math.random() * this.words.length)];
};


