let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");

submit.addEventListener("click", italiciseText);

let italics = ["started", "completed", "worked on"];

function italiciseText() {
  let inputText = text.value;
  italics.forEach((word) => {
    if (
      inputText.indexOf(word) !== -1 &&
      inputText.indexOf(`**${word}**`) === -1
    )
      formattedText.innerHTML = inputText.replace(
        new RegExp(word, "g"),
        `**${word}**`
      );
    // update previously replaced verbs
    inputText = formattedText.innerHTML;
  });
}
