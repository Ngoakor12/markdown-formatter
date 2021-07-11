let text = document.querySelector("#text");
let submit = document.querySelector("#submit");
let formattedText = document.querySelector("#formattedText");

submit.addEventListener("click", transformText);

let italics = ["started"];

function transformText() {
  let result = text.value.replace(
    new RegExp(italics[0], "g"),
    `**${italics[0]}**`
  );
  formattedText.innerHTML = result;
  //   console.log(result);
}
