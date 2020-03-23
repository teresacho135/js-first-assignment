//--------------------------------------------------Assignment 7: DOM----------------------------------------------//
// 1. Have a paragraph. On click of a button, alert the text in the paragraph.

function initiateParagraph() {
  document.getElementById('paragraph').innerHTML = 'ALERT: Here is a paragraph. '
};

// 2. Have a paragraph. On click of a button, change the backgroundColor and text color of the paragraph.
const changeParagraphColor = () => {
  document.getElementById('paragraph').style.color = 'blue';
};