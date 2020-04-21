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
// const dogShow = document.getElementById('dog-img');
                      
const dogImages = [
  'assets/pug-beret.jpg',
  'assets/pug-hoodie.jpg',
  'assets/pug-hat.jpg',
  'assets/pug-closeup.jpg',
  'assets/pug-striped-shirt.jpg',
  'assets/pug-fuzzy-hoodie.jpg',
  'assets/pug-glasses.jpg',
  'assets/pug-raincoat.jpg',
  'assets/pug-red-hoodie.jpg',
  'assets/pug-sleepy.jpg',
]; 


let currentIndex = 0;

document.getElementById('dog-show').setAttribute('src', dogImages[0]);

const handlePrev = () => {
  if(currentIndex === 0) {
    document.getElementById('dog-show').setAttribute('src', dogImages[dogImages.length - 1])
    currentIndex = 10;
  } else {
    document.getElementById('dog-show').setAttribute('src', dogImages[currentIndex - 1])
    currentIndex--;
  };
};

const handleNext = () => {
  if(currentIndex === 10) {
    document.getElementById('dog-show').setAttribute('src', dogImages[0])
    currentIndex = 0;
  } else {
    document.getElementById('dog-show').setAttribute('src', dogImages[currentIndex + 1])
    currentIndex++;
  }
};

//Form Validation

// Create a form with First Name, Last Name, radio buttons for Gender 
// (Male and Female), drop down menu for State,
//  a check box for I ACCEPT and a submit button.
//   At the click of submit button, the following should be validated.

//check index.html

// 1. If the First Name and Last Name fields are left blank or
//  has a number, the background color of the text box should change to red color.

const validateForm = (event) => {
  let firstName = document.forms['info-form']['first-name'].value;
  let lastName = document.forms['info-form']['last-name'].value;
  let maleCheckbox = document.getElementById('male');
  let femaleCheckbox = document.getElementById('female');
  let otherCheckbox = document.getElementById('other');
  let state = document.getElementById('states');
  let checkbox = document.getElementById('agree');
  let letters = /^[A-Za-z]+$/;
  if(firstName === '' && lastName === '' ) {
    document.getElementById('first-name-info').style.backgroundColor = 'red';
    document.getElementById('last-name-info').style.backgroundColor = 'red';
  } else if(!firstName.match(letters) && !lastName.match(letters)) {
    document.getElementById('first-name-info').style.backgroundColor = 'red';
    document.getElementById('last-name-info').style.backgroundColor = 'red';
  } else if(maleCheckbox.checked == false && femaleCheckbox.checked == false && otherCheckbox.checked == false) {
    alert('Please check one of the boxes')
  } else if(state.value == '') {
    alert('Please pick a state.')
  } else if(!checkbox.checked) {
    alert('Please check \'I AGREE\' to proceed.')
  }
  event.preventDefault();
};

// 2. If the Gender is not selected, alert the user to select at least one option.
//can use required (allowing the browser to do validation.)

// 3. If the State is not selected, alert the user to select a state.
//refer back to validateFrom() function.

// 4. If the check box is not selected, alert the user to check the box.
//refer back to validateForm() function.

//DOM and EVENTS:
// 1. Write a program to convert Fahrenheit temperature to Celsius. 
// Here are the things that needs to be implemented as a part of this question:
// a. Ask the input from the user for Fahrenheit using a text field
// b. As soon as the user types in the Fahrenheit number in the text field, 
// the result should display immediately in the div below
// c. Hence, there should not be any submit button
// d. Hint: Use onkeyup event. Formula is : C = (F - 32) * 5/9
// e. Don't display the decimal values - but you should accept decimal values from the user
// f. If the user enters any invalid values (strings) ) 
// then you should make the input box border red and prompt user to enter correct values

const tempConverter = (value) => {
  value = parseFloat(value);
  convertedValue = Math.round((value - 32)/1.8);
  document.getElementById('outputCelcius').innerHTML = convertedValue + '°' ;
};

// 2. Have images, p tags, div tags and various other elements on the page. 
// When the page loads, an alert saying "welcome to my blog" should pop up.
// alert('Welcome to my blog');

// 3. Have several html tags on the page. 
// Have an input button with id hideElems. 
// When this button is clicked all the elements on the page should be hidden.
const hide = () => {
  hideElements = document.getElementById('hideMe');
  hideElements.setAttribute('style', 'visibility: hidden');
};

// 4. Have an input button with id showElems. 
// When this button is double clicked, 
// all the elements on the page should be shown.
const show = () => {
  showElements = document.getElementById('hideMe');
  showElements.setAttribute('style', 'visbility: visible');
};

// 5. Have an input button with a id and
// a. when you mouseover this button, 
// the <ul> elements on the page should be shown.
// b. when you mouseout this button, 
// the <ul> elements on the page should be hidden.

const showList = () => {
  list = document.getElementById('interestingList');
  list.setAttribute('style', 'display: show');
};

const hideList = () => {
  list = document.getElementById('interestingList');
  list.setAttribute('style', 'display: none');
};

// 6. When page loads, write code to hide elements all the elements 
// with ids "main_one", "main_two" and "main_three".

const hideSheep = () => {
  sheep1 = document.getElementById('main_1');
  sheep1.setAttribute('style', 'display: none');
};

