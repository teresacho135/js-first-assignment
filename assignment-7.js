//--------------------------------------------------Assignment 7: DOM----------------------------------------------//
// 1. Have a paragraph. On click of a button, alert the text in the paragraph.

function initiateParagraph() {
  document.getElementById('paragraph').innerHTML = 'ALERT: Here is a paragraph. '
};

// 2. Have a paragraph. On click of a button, change the backgroundColor and text color of the paragraph.
const changeParagraphColor = () => {
  document.getElementById('paragraph').style.color = 'blue';
};

// 3. Have two text boxes. On click of a button, get the value from the first text box and 
// assign that value to the second text box.

const formData = () => {
  let firstName = document.getElementById('first-name').value;
  document.getElementById('first-name-returned').placeholder = firstName;
};

//how to stop the DOM from doing a full refresh.

// 4. Have an image.
//line 44 in assignment-7.js 