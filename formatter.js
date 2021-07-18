let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");
let wordsToItalicise = document.querySelector("#italics");
let addWords = document.querySelector("#addWords");
let italicisedArray = document.querySelector("#italicisedArray");

submit.addEventListener("click", italiciseText);
addWords.addEventListener("click", addWordsToItalicise);

let italics = ["started", "completed", "worked on"];

function addWordsToItalicise() {
  wordsToItalicise = Array(wordsToItalicise.value.split(","));
  wordsToItalicise.forEach((input) => {
    italics.push(input);
  });
  italicisedArray.innerHTML = italics;
}

function italiciseText() {
  let inputText = text.value;
  italics.forEach((word) => {
    if (
      inputText.indexOf(word) !== -1 &&
      inputText.indexOf(`**${word}**`) === -1
    )
      formattedText.innerHTML = inputText.replace(
        new RegExp(word, "gi"),
        `**${word}**`
      );
    // update previously replaced verbs
    inputText = formattedText.innerHTML;
  });
}
