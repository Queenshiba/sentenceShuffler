
function convert() {
  let originalInpput = document.getElementById('originalInpput')
  let originalInputText = originalInpput.value
  console.log(typeof originalInputText)

    let convertedOutput = document.getElementById('convertedOutput')

    convertedOutput.value = sentenceShuffler(originalInputText)
    console.log(convertedOutput.value)
      
  function sentenceShuffler(str) {


    let regex = /(\w+'\w+)|\w+|,|\.|\!/g
    // console.log(str)
    let separetedSigns = str.match(regex);

    return shuffle(separetedSigns);


  }




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



}

function copySentence() {
let convertedOutput = document.getElementById('convertedOutput')
convertedOutput.select()
convertedOutput.setSelectionRange(0,99999)
document.execCommand("copy");
console.log(convertedOutput.value)

}
