let formatText = document.getElementById("submit");
let input = document.getElementById("textbox");
let formattedText = document.getElementById("formattedText");
let text = "standUp\nstarted morse code\ncompleted Validate SA ID";
let verbs = ["started", "worked on", "completed", "Reviewed"];
let sentences = text.split("\n");
let words = text.split(" ");

formatText.addEventListener("click", () => {
	sentences[0] = `**${
		sentences[0].slice(0, 1).toUpperCase() + sentences[0].slice(1)
	}**`;
	formattedText.value = sentences.join("\n");
	for (let i = 0; i < words.length; i++) {
		// console.log(words[i]);
		for (let j = 0; j < verbs.length; j++) {
			if (words[i] == verbs[j]) {
				console.log(words[i], verbs[j]);
				words[i] = `**${verbs[j]}**`;
			}
		}
	}
	// formattedText.value = sentences.join("\n");
	formattedText.value = words.join(" ");
});
