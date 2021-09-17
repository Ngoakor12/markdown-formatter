let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");
let enteredWords = document.querySelector("#entered-words");
let addWords = document.querySelector("#addWords");
let italiciseWords = document.querySelector("#italicised-words");

submit.addEventListener("click", italiciseText);
addWords.addEventListener("click", displayWords);

function displayWords() {
  const words = getEnteredWords(enteredWords.value);
  italiciseWords.innerHTML = words;
}

function getEnteredWords(wordsArray) {
  const words = wordsArray.split(",");
  return words;
}

function italiciseText() {
  const words = getEnteredWords(enteredWords.value);
  let input = text.value;
  words.forEach((word) => {
    formattedText.value = input.replace(
      new RegExp(`${word}`, "g"),
      `**${word}**`
    );
    // save previously replaced verbs
    input = formattedText.value;
  });
}
