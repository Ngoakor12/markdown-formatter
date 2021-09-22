const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#submit");
let formattedText = document.querySelector("#formatted-text");
let enteredWords = document.querySelector("#entered-words");
const addWordsButton = document.querySelector("#add-words");
let italiciseWords = document.querySelector("#italicised-words");
const copyButton = document.querySelector("#copy-button");
let markdownPreviewText = document.querySelector("#markdown-section");
let enteredWordsArray = document.querySelectorAll(".enteredWord");

submitButton.addEventListener("click", italiciseText);
addWordsButton.addEventListener("click", addWordsToPage);
copyButton.addEventListener("click", copyText);

// function displayWords() {
//   const words = getEnteredWords(enteredWords.value);
//   italiciseWords.innerHTML = words;
// }

function getEnteredWords(wordsArray) {
  if (wordsArray) {
    // local source array
    const words = wordsArray.split(",");
    return words;
  }
}

function addWordsToPage() {
  // reset the elements shown on the page
  // let enteredWordsArray = document.querySelectorAll(".enteredWord");
  enteredWordsArray.forEach((word) => {
    word.remove();
  });

  // page array
  let words = getEnteredWords(enteredWords.value);
  words.forEach((word) => {
    const para = document.createElement("p");
    para.classList.add("enteredWord");
    para.innerHTML = word;
    italiciseWords.appendChild(para);
  });

  // update words array and make each word disappear onclick
  enteredWordsArray = document.querySelectorAll(".enteredWord");
  enteredWordsArray.forEach((word) => {
    word.addEventListener("click", removeWord);
  });
}

function removeWord(e) {
  const word = e.target;
  let words = getEnteredWords(enteredWords.value);

  // remove from page
  word.remove();

  // update source array
  let tempArray = words.slice();

  // joined to be able to use replace()
  // since it only works on strings
  tempArray = tempArray.join(",");

  const tempString = tempArray.replace(word.innerHTML, "");
  tempArray = tempString.split(",");

  const noBlanksArray = tempArray.filter((word) => word);
  words = noBlanksArray;
  // console.log(words);
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
  formattedText.value = input;
  const result = marked(input);
  markdownPreviewText.innerHTML = result;
}

function copyText() {
  formattedText.select();
  navigator.clipboard.writeText(formattedText.value);
}
