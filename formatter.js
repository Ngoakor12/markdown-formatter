let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");
let wordsToItalicise = document.querySelector("#italics");
let addWords = document.querySelector("#addWords");
let italicisedArray = document.querySelector("#italicisedArray");

submit.addEventListener("click", italiciseText);
addWords.addEventListener("click", addWordsToItalicsArray);

let italics = [];

function addWordsToItalicsArray() {
  if (wordsToItalicise.value !== "" || wordsToItalicise.value !== undefined) {
    if (wordsToItalicise.value.indexOf(",") !== -1) {
      wordsToItalicise = wordsToItalicise.value.split(",");
      italics = wordsToItalicise;
    } else {
      italics.push(wordsToItalicise.value);
    }
  }
  italicisedArray.innerHTML = italics;
}

function italiciseText() {
  let input = text.value;
  italics.forEach((word) => {
    formattedText.value = input.replace(new RegExp(word, "g"), `**${word}**`);
    // save previously replaced verbs
    input = formattedText.value;
  });
}
