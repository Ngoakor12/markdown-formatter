const inputText = document.querySelector("#input-text");
const submitButton = document.querySelector("#submit");
let formattedText = document.querySelector("#formatted-text");
let enteredWords = document.querySelector("#entered-words");
const addWordsButton = document.querySelector("#add-words");
let italiciseWords = document.querySelector("#italicised-words");
const copyButton = document.querySelector("#copy-button");
let markdownPreviewText = document.querySelector("#markdown-section");
let enteredWordsArray = document.querySelectorAll(".enteredWord");
let words = [];

submitButton.addEventListener("click", italiciseText);
addWordsButton.addEventListener("click", addWords);
copyButton.addEventListener("click", copyText);

function getArray(wordsArray) {
  if (wordsArray) {
    // local source array
    const words = wordsArray.split(",");
    return words;
  }
}

function addWords() {
  // 1. remove any words that are already added,
  // reset the elements shown on the page
  if (enteredWordsArray) {
    enteredWordsArray.forEach((word) => {
      word.remove();
    });
  }

  // 2. add words to page
  // 3. update global words array
  words = getArray(enteredWords.value);
  if (words) {
    words.forEach((word) => {
      const para = document.createElement("p");
      para.classList.add("enteredWord");
      para.innerHTML = word;
      italiciseWords.appendChild(para);
    });
  }

  // 4. add event listener to each word on the page to removeWord onclick
  // update words array and make each word disappear onclick
  enteredWordsArray = document.querySelectorAll(".enteredWord");
  enteredWordsArray.forEach((word) => {
    word.addEventListener("click", removeWord);
  });
}

function removeWord(e) {
  const word = e.target;

  // 1. remove clicked word from page
  word.remove();

  // 2. remove word in global words array
  // update global array
  // joined to be able to use replace()
  // since it only works on strings
  let tempArray = words.slice();
  tempArray = tempArray.join(",");
  const tempString = tempArray.replace(word.innerHTML, "");
  tempArray = tempString.split(",");
  const noBlanksArray = tempArray.filter((word) => word);
  words = noBlanksArray;

  // 3. remove word in the input field
  // update input field
  // joined to be able to use replace()
  // since it only works on strings
  enteredWords.value = enteredWords.value.replace(word.innerHTML, "");
  tempArray = enteredWords.value.split(",");
  tempArray = tempArray.filter((word) => word);
  enteredWords.value = tempArray.join(",");

  // update words on page array
  enteredWordsArray = document.querySelectorAll(".enteredWord");
}

function italiciseText() {
  // const words = getArray(italiciseWords.innerHTML);
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
