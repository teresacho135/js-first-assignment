//--------------------------------------------------Assignment 2: Switch----------------------------------------------//

// 1. Write a program to prompt the user for age. 
// If age is equal to 14, alert "coupon 1". 
// If age is equal to 21, alert "coupon 2". 
// If age is equal to 30, alert "coupon 3". 
// If age is equal to 50, alert "coupon 4". 
// Else alert "No coupon".

function freeCoupons() {
  let age = prompt('Enter your age please');
  switch (age) {
    case '14':
      alert('coupon 1');
      break;
    case '21':
      alert('coupon 2');
      break;
    case '30':
      alert('coupon 3');
      break;
    case '50':
      alert('coupon 4')
      break;
    default:
      alert('no coupon for you');
      break;
  };
};

// 2. Write a program to prompt the user to enter a day 
// (like Monday, Tuesday, Wednesday, etc). 
// Based on the value entered by the user, 
// display a special dish. 
// For example, if the user enters Monday then 
// alert "Mondays, We serve Pasta". 
// If the user enters Friday then alert "Fridays, we serve Tacos".

function hungryPeople() {
  let day = prompt('Enter a day to see what we are cooking!');
  let foodStatus = ''
    switch (day) {
      case 'Monday':
        foodStatus = 'Mondays, we feed you Spagetti! 🍝'
        break;
      case 'Tuesday':
        foodStatus = 'Tuesday, we feed you Tacos! 🌮'
        break;
      case 'Wednesday':
        foodStatus = 'Wednesday, we feed you Cheeseburgers! 🍔'
        break;
      case 'Thursday':
        foodStatus = 'Thursday, we feed you Noodles! 🍜'
        break;
      case 'Friday':
        foodStatus = 'Friday, we feed you Sushi! 🍣'
        break;
      case 'Saturday':
        foodStatus = 'Saturdays, we feed you Burritos! 🌯'
        break;
      case 'Sunday':
        foodStatus = 'Sunday, we feed you Pizza! 🍕'
        break;
      default:
        foodStatus = 'We feed you, Garbage! 🗑 Please input a proper day w/ Capitalization'
    };
    document.getElementById('food-status').innerHTML = foodStatus
};

// 3. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
// Based on the value entered, display the movie that won the Oscars for that year. 
// Just write this for last 8 years. 
// If he enters beyond last 8 years then alert the user to enter between 2003-2012.
function whoWon() {
  let year = prompt('Enter a year between 2003-2012 to see what movie won the Oscars that year.')
  let winner = ''
    switch (year) {
      case '2003':
        winner = ' 🎥 In the 2003, the Oscar\'s\ Movie of the Year was \'Chicago\' directed by Rob Marshall 🎥' 
        break;
      case '2004':
        winner = ' 🎥 In 2004, the Oscar\'s Movie of the Year is \'The Lord of the Rings: Return of the King\' directed by Peter Jackson 🎥'
        break;
      case '2005':
          winner = ' 🎥 In 2005, the Oscar\'s Movie of the Year is \'Million Dollar Baby\' directed by Clint Eastwood 🎥'
          break;
      case '2006':
          winner = ' 🎥 In 2006, the Oscar\'s Movie of the Year is \'Crash\' directed by Paul Haggis 🎥'
          break;
      case '2007':
          winnner = ' 🎥 In 2007, the Oscar\'s Movie of the Year is \'The Depearted\' directed by Martin Scorsese 🎥'
          break;
      case '2008':
          winner = ' 🎥 In 2008, the Oscar\'s Movie of the Year is \'No Country for Old Men\' directed by Joel and Ethan Coen 🎥'
          break;
      case '2009':
          winner = ' 🎥 In 2009, the Oscar\'s Movie of the Year is \'Slumdog Millionaire\' directed by Danny Boyle🎥'
          break;
      case '2010':
          winner = ' 🎥 In 2010, the Oscar\'s Movie of the Year is \'The Hurt Locker\' directed by Kathryn Bigelow 🎥'
          break;
      case '2011':
          winner = ' 🎥 In 2011, the Oscar\'s Movie of the Year is \'The King\'s Speech\' directed by Tom Hopper 🎥'
          break;
      case '2012':
          winner = ' 🎥 In 2012, the Oscar\'s Movie of the Year is \'The Artist\' directed by Michel Hazanavicius 🎥'
          break;
      default:
          winner = 'Please enter a year within the last 8 years (2003-2012)'
          break;
    };
  document.getElementById('winners').innerHTML = winner;
}

// 4. Write a program to prompt the user to enter the Grade of a student 
// (like A+, A, A-, B etc). 
// Based on the value entered, display terms like "Excellent", "Good Job", "Average" etc.

function switchGrade () {
  let grade = prompt('Enter the grade received. Ex: \'A+, A-. A, B+ and etc..\'');
  let response = '';
    switch(grade) {
      case 'A+':
      case 'A':
        response = 'YOU ARE A CHAMPION! 🏆' 
        break;
      case 'A-':
      case 'B+':
        response = 'NEARLY PERFECT! HERE\'S\ A COOKIE! 🍪'  
        break;
      case 'B':
      case 'B-':
        response = 'ALMOST THERE! GREAT JOB 🎉' 
        break;
      case 'C+':
      case 'C':
        response = 'ROOM FOR IMPROVEMENT, LET\'S\ WORK ON THIS! 💪' 
        break;
      case 'C-':
      case 'D+':
        response = 'NEED\'S\ REVIEW, BOOK OFFICE HOURS 🙏' 
        break;
      case 'D':
      case 'D-':
      case 'F':
        response = 'BOOK OFFICE HOURS ASAP PLEASE! 🏃‍♂️' 
        break;
      default: 
        response = 'Please enter a proper grade w/ Capitlization';
        break;
    };
  document.getElementById('grading').innerHTML = response;
};
