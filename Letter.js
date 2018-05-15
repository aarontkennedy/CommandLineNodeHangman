exports.Letter = function (l) {
  const value = l.toUpperCase()[0];
  let isGuessed = false; 

  if (!value.match(/[A-Z]/i)) {
    isGuessed = true;
  }

  this.get = function () { return value; };

  this.isLetterGuessed = function () { return isGuessed; };

  this.checkGuess = function (guess) {
    if (guess.toUpperCase() === value) {
      isGuessed = true;
    }
    return isGuessed;    
  };

  this.toString = function () {
    if (this.isLetterGuessed()) {
      return value;
    }
    else {
      return "_";
    }
  }
};

// testing code - only run if not called as a require
if (require.main === module) {
  console.log('called directly');

  let test = new exports.Letter("a");
  console.log(test + "");
  test.checkGuess("b");
  console.log(test + "");
  test.checkGuess("a");
  console.log(test + "");
} 
/*else {
  console.log('required as a module');
}*/