/*
Given an textarea and a character limit of 200
When a user types characters into the textarea
Then the interface should update with how many characters they’ve got left.
*/

// Steps to follow:
// 1- Define the character limit of 200
// 2- Access the textarea element
// 3- Calculate the number of characters left
  /* Let’s break down Step 3 into sub-goals:
  -1- Get the character limit,
  -2- Get the number of characters already typed,
  -3- Subtract already typed characters from the limit.
  */
// 4- Update the Interface with the number of characters left

/*
NB: There are two times we may want to do this:
1- When the page first loads we should show the initial limit.
2- Whenever the user adds or removes a character from the textarea, we want to update to show the remaining limit. 
*/

const textArea = document.querySelector("textarea");
const characterLimit = 200;

// My own experimentation 
console.log(characterLimit);
console.log(document.querySelector)
console.log("textarea");
console.log(document.querySelector("textarea"));
console.log(document);
console.log(200);
console.log("200");
console.log(textArea.value);

// keyup event is fired when a key is released => keyup event is any interaction happening by the user interface
//( click, typing, or deleting characters in this case)

// We can ask the browser to react to this event 
// run some code, whenever the keyup event takes place. We do it with eventListeners (addEventListener).

textArea.addEventListener("keyup", function () {
    console.log("keyup is firing...");  // This will log in the console the number of time often text is entered in the textarea box.
    console.log(textArea.value, "<--This will give us the textArea value as string of input characters"); // 
    console.log(textArea.value.length, "<--The .length method will give us the number of characters inputted in the textArea"); 
    console.log(characterLimit, " is the character limit");

    // To calculate the number of characters left after the user input in textArea: 200 - textArea.value.length
    console.log( characterLimit - textArea.value.length );

    const characterLeft = characterLimit - textArea.value.length; // we declare the variable charactersLeft

    // To update the text [<p></p>(HTML)] with the actual characters left:
    console.log(document.querySelector("p"));

    const charLimitInfo = document.querySelector("p");

    charLimitInfo.innerHTML = `You have ${characterLeft} characters remaining`;

})