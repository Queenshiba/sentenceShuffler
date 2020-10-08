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

  let slashes = array.join(' / ');
  console.log(slashes)
  return '( ' + slashes + ' )'
  
}


function sentenceShuffler(str) {
  console.log(str)
  let originalInpput = document.getElementById('originalInpput')
  let originalInpputText = originalInpput.value
  let regex = /(\w+'\w+)|\w+|,|\.|\!/g

  let separetedSigns = originalInpputText.match(regex);
  //   console.log(separetedSigns)

  return shuffle(separetedSigns);


}

  let ConvertedOutput = document.getElementById('ConvertedOutput')
// let ConvertedOutputText = sentenceShuffler(str)