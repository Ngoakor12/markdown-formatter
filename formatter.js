let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");
let wordsToItalicise = document.querySelector("#italics");
let addWords = document.querySelector("#addWords");
let italicisedArray = document.querySelector("#italicisedArray");

submit.addEventListener("click", italiciseText);
addWords.addEventListener("click", addWordsToItalicsArray);

let italics = [];
// let italics = ["started", "completed", "worked on"];

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
    // if (input.indexOf(word) !== -1 && input.indexOf(`**${word}**`) === -1)
    formattedText.innerHTML = input.replace(
      new RegExp(word, "g"),
      `**${word}**`
    );
    console.log(formattedText.innerHTML);
    // save previously replaced verbs
    input = formattedText.innerHTML;
  });
}

// let a = "I like orange, blue, black, pink, rose, yellow, white, black";

// const b = ["black", "yellow"];

// b.forEach((word) => {
//   a = a.replace(word, "violet");
// });
// console.log(a);
