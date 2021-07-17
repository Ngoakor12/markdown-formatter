let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");

submit.addEventListener("click", transformText);

let italics = ["started", "completed", "worked on"];

function transformText() {
  let input = text.value;
  italics.forEach((word) => {
    if (input.indexOf(word) !== -1 && input.indexOf(`**${word}**`) === -1)
      formattedText.innerHTML = input.replace(
        new RegExp(word, "g"),
        `**${word}**`
      );
    // save previously replaced verbs
    input = formattedText.innerHTML;
  });
}
