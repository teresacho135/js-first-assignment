//--------------------------------------------------Assignment 7: DOM----------------------------------------------//

//Form Validation

// Create a form with First Name, Last Name, radio buttons for Gender 
// (Male and Female), drop down menu for State,
//  a check box for I ACCEPT and a submit button.
//   At the click of submit button, the following should be validated.

//check index.html

// 1. If the First Name and Last Name fields are left blank or
//  has a number, the background color of the text box should change to red color.

// const validateForm = () => {
//   debugger;
//   let firstName = document.forms['info-form']['first-name'];
//   let lastName = document.forms['info-form']['last-name'];
//   if (firstName.value === '') {
//     // alert('this is empty');
// debugger;
//     document.getElementById('first-name').style.backgroundColor = 'red';
//     return false;
//   };
// };
//check other FIRST NAME IDS!
// const validateForm = (e) => {
//   e.preventDefault();
//   return alert('this has been activated')
// }

//cannot seem to get validateForm() to ouput. 
//Has CSS psuedo-selector that can create output but struggling on logic. 

const validateForm = () => {
  console.log('submit has been clicked.')
  let firstName = document.forms['info-form']['first-name'];
  console.log(firstName);
  if(firstName.value === '') {
    document.getElementById('first-name-info').style.backgroundColor = 'red';
  }
}
