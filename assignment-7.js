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
// a. On click of a button, replace the image with another image.
const imageChange = () => {
  document.getElementById('pug-image').src = 'assets/pug-hat.jpg'
};

// b. On click of a button, hide the image
const displayNone = () => {
  document.getElementById('pug-beret').style.display = 'none';
};

// c. On click of a button, show the image
const pugClick = () => {
  document.getElementById('pug-hoodie').style.display = 'block'
};

//5. Have an image and two buttons, PREV and NEXT. 
// Have 10 images in an array. When you click on NEXT, 
// the next picture should display and when you click on PREV, the previous image should display.
const dogImages = [
  document.getElementById('dog-show').src = 'assets/pug-striped-shirt.jpg',
  document.getElementById('dog-show').src = 'assets/pug-beret.jpg'
];

