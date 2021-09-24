var translateButton = document.querySelector("#translate-button");

translateButton.addEventListener("click", buttonClickHandler)

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

function buttonClickHandler() {
    translateOutput.innerText = "bananana " + translateInput.value;

}