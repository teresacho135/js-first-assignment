//--------------------------------------------------Assignment 7: DOM----------------------------------------------//

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
  let letters = /^[A-Za-z]+$/;
  if(firstName === '' && lastName === '' ) {
    document.getElementById('first-name-info').style.backgroundColor = 'red';
    document.getElementById('last-name-info').style.backgroundColor = 'red';
  } else if(!firstName.match(letters) && !lastName.match(letters)) {
    document.getElementById('first-name-info').style.backgroundColor = 'red';
    document.getElementById('last-name-info').style.backgroundColor = 'red';
  };
  event.preventDefault();
};
