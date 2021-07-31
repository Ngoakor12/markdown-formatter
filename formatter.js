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
  wordsToItalicise = Array(wordsToItalicise.value.split(","));
  wordsToItalicise.forEach((input) => {
    italics.push(input);
  });
  italicisedArray.innerHTML = italics;
}

function italiciseText() {
  console.log(italics);
  let input = text.value;
  italics.forEach((word) => {
    formattedText.innerHTML = input.replace(
      new RegExp(word, "g"),
      `**${word}**`
    );
    console.log(formattedText.innerHTML);
    // save previously replaced verbs
    input = formattedText.innerHTML;
  });
}
