
function convert() {
  // Set a variable for an original text
  let originalInpput = document.getElementById('originalInpput')
  let originalInputText = originalInpput.value
  // console.log(typeof originalInputText)

  // Set a variable for a converted text
  let convertedOutput = document.getElementById('convertedOutput')
  convertedOutput.value = sentenceShuffler(originalInputText)
  // console.log(convertedOutput.value)

  // the first function in 'convert' function above
  function sentenceShuffler(str) {
    // Set regex for those signs ',(comma)', '.(period)', '!'and '?'
    let regex = /(\w+'\w+)|\w+|,|\.|\?|\!/g
    // if the iput has the signs above, separated with ""
    let separetedSigns = str.match(regex);
    // console.log(separetedSigns)

    // put those separated words into 'shuffle' function 
    return shuffle(separetedSigns);
  }

// the second function in in 'convert' function above
  function shuffle(array) {

    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    // add slashes with every word
    let slashes = array.join(' / ');
    // make all words lowercase
    let lowerSlashes = slashes.toLowerCase()
    // console.log(typeof slashes)
    return '( ' + lowerSlashes + ' )'

  }



}

// the function that copys the converted sentence (to a clipboard) 
function copySentence() {
  let convertedOutput = document.getElementById('convertedOutput')
  convertedOutput.select()
  convertedOutput.setSelectionRange(0, 99999)
  document.execCommand("copy");
  console.log(convertedOutput.value)

}

// the function that reset textarea
function reset() {
  let originalInpput = document.getElementById('originalInpput')
  originalInpput.value = '';

  let convertedOutput = document.getElementById('convertedOutput')
  convertedOutput.value = '';

}