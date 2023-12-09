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
const inputButton = document.querySelector("#inputBtn");
const outputButton = document.querySelector("#outputBtn");
const inputSection = document.querySelector("#inputSection");
const outputSection = document.querySelector("#outputSection");

submitButton.addEventListener("click", italiciseText);
addWordsButton.addEventListener("click", addWords);
copyButton.addEventListener("click", copyText);
inputButton.addEventListener("click", displayInputSection);
outputButton.addEventListener("click", displayOutputSection);

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
  // display each line on a new line
  const formattedWordsArr = formattedText.value.split(/\n/);
  console.log(formattedWordsArr);
  // clear previous text
  markdownPreviewText.innerHTML = "";
  formattedWordsArr.forEach((line) => {
    const result = marked.parse(line);
    markdownPreviewText.innerHTML += result;
  });
  displayOutputSection();
}

function copyText() {
  formattedText.select();
  navigator.clipboard.writeText(formattedText.value);
}

function displayOutputSection() {
  outputButton.style.backgroundColor = "white";
  outputButton.style.color = "black";
  outputButton.style.borderBottom = "none";
  outputSection.style.visibility = "visible";
  inputButton.style.backgroundColor = "rgb(250, 250, 250)";
  inputButton.style.borderBottom = "1px solid black";
  inputSection.style.visibility = "hidden";
  inputButton.style.color = "rgb(121, 121, 121)";

  focusOnTextbox(formattedText);
}

function displayInputSection() {
  inputButton.style.color = "black";
  inputButton.style.backgroundColor = "white";
  inputButton.style.borderBottom = "none";
  inputSection.style.visibility = "visible";
  outputButton.style.color = "rgb(121, 121, 121)";
  outputButton.style.borderBottom = "1px solid black";
  outputButton.style.backgroundColor = "rgb(250, 250, 250)";
  outputSection.style.visibility = "hidden";

  focusOnTextbox(inputText);
}

function focusOnTextbox(textBox) {
  textBox.focus();
  if (textBox.value) {
    // Set text-selection to end
    textBox.SelectionStart =
      textBox.Text.length == 0 ? 0 : textBox.Text.length - 1;
    // Set text-selection length (in your case 0 = no blue text)
    textBox.SelectionLength = 0;
  }
}
