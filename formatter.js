const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#submit");
let formattedText = document.querySelector("#formatted-text");
let enteredWords = document.querySelector("#entered-words");
const addWordsButton = document.querySelector("#add-words");
let italiciseWords = document.querySelector("#italicised-words");
const copyButton = document.querySelector("#copy-button");

submitButton.addEventListener("click", italiciseText);
addWordsButton.addEventListener("click", displayWords);
copyButton.addEventListener("click", copyText);

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
  let input = inputText.value;
  words.forEach((word) => {
    formattedText.value = input.replace(
      new RegExp(`${word}`, "g"),
      `**${word}**`
    );
    // save previously replaced verbs
    input = formattedText.value;
  });
}

function copyText() {
  formattedText.select();
  navigator.clipboard.writeText(formattedText.value);
}
