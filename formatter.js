const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#submit");
let formattedText = document.querySelector("#formatted-text");
let enteredWords = document.querySelector("#entered-words");
const addWordsButton = document.querySelector("#add-words");
let italiciseWords = document.querySelector("#italicised-words");
const copyButton = document.querySelector("#copy-button");
let markdownPreviewText = document.querySelector("#markdown-section");

submitButton.addEventListener("click", italiciseText);
addWordsButton.addEventListener("click", displayWords);
copyButton.addEventListener("click", copyText);

function displayWords() {
  const words = getEnteredWords(enteredWords.value);
  italiciseWords.innerHTML = words;
}

function getEnteredWords(wordsArray) {
  if (wordsArray) {
    const words = wordsArray.split(",");
    return words;
  }
}

function italiciseText() {
  const words = getEnteredWords(italiciseWords.innerHTML);
  let input = inputText.value;
  if (words) {
    words.forEach((word) => {
      if (inputText.value && words[0] != "") {
        formattedText.value = input.replace(
          new RegExp(`${word}`, "g"),
          `*${word}*`
        );
        // save previously replaced verbs
        input = formattedText.value;
      }
    });
  }
  const result = marked(input);
  markdownPreviewText.innerHTML = result;
}

function copyText() {
  formattedText.select();
  navigator.clipboard.writeText(formattedText.value);
}
