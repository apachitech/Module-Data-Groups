const textArea = document.querySelector("#comment-input");
const characterLimit = 200;

function updateCharacterLimit() {
    const characterLeft = characterLimit - textArea.value.length; // we declare the variable charactersLeft
    const charLimitInfo = document.querySelector("p");

    charLimitInfo.innerHTML = `You have ${characterLeft} characters remaining`;
} 

textArea.addEventListener("keyup", updateCharacterLimit);

//_________________________________________________OR____________________________________________________________

/*
const textArea = document.querySelector("#comment-input");
const characterLimit = 200;

textArea.addEventListener("keyup", function updateCharacterLimit() {
    const characterLeft = characterLimit - textArea.value.length; // we declare the variable charactersLeft
    const charLimitInfo = document.querySelector("p");

    charLimitInfo.innerHTML = `You have ${characterLeft} characters remaining`;
});

*/