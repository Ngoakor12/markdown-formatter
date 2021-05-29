let formatText = document.getElementById("submit");
let input = document.getElementById("textbox");
let formattedText = document.getElementById("formattedText");
let text = "standUp\nstarted morse code\ncompleted Validate SA ID";
let verbs = ["started", "worked on", "completed", "Reviewed"];
let sentences = text.split("\n");

formatText.addEventListener("click", () => {
	sentences[0] = `**${
		sentences[0].slice(0, 1).toUpperCase() + sentences[0].slice(1)
	}**`;
	formattedText.value = sentences.join("\n");
});
