//--------------------------------------------------Assignment 1: If-Else----------------------------------------------//

// 1. Write a program to prompt the user for age. 
// If age is less than or equal to (<=) 14, alert "Not Allowed". 
// If age is greater than 14 and less than 65, alert "Regular Price".
// If age is equal to 50, alert "Special discount".

// function ageIs(age) {
//   if(age <= 14) {
//     alert('Not Allowed');
//   } else if(age === 50) {
//     alert('Special Discount')
//   } else if(age > 14 && age < 65) {
//     alert('Regular Price')
//   } 
// }

// ageIs(50)

// 2. Write a program to prompt the user for age. 
// If age is equal to 14, alert "coupon 1". 
// If age is equal to 21, alert "coupon 2". 
// If age is equal to 30, alert "coupon 3". 
// If age is equal to 50, alert "coupon 4". Else alert "No coupon".

// function ageIs(age) {
//   if(age === 14) {
//     alert('coupon 1')
//   } else if(age === 21) {
//     alert('coupon 2')
//   } else if(age === 30) {
//     alert('coupon 3')
//   } else if(age === 50) {
//     alert('coupon 4')
//   } else {
//     alert('No coupon')
//   }
// };

// ageIs(14)

// 3. Write a program to prompt the user to enter a day 
// (like Monday, Tuesday, Wednesday, etc). 
// Based on the value entered by the user, 
// display a special dish. 
// For example, if the user enters Monday then 
// alert "Mondays, We serve Pasta". 
// If the user enters Friday then alert "Fridays, we serve Tacos".

function feedMeSeymour() {
  let day = prompt('What day is today? (Please capitalize)')
    if(day === 'Monday') {
      alert('Mondays, we feed you Spagetti! 🍝');
    } else if(day === 'Tuesday') {
      alert('Tuesday, we feed you Tacos! 🌮');
    } else if(day === 'Wednesday') {
      alert('Wednesday, we feed you Cheeseburgers! 🍔' );
    } else if(day === 'Thursday') {
      alert('Thursday, we feed you Noodles! 🍜');
    } else if(day === 'Friday') {
      alert('Friday, we feed you Sushi! 🍣');
    } else if(day === 'Saturday') {
      alert('Saturdays, we feed you Burritos! 🌯')
    } else if(day === 'Sunday') {
      alert('Sunday, we feed you Pizza! 🍕')
    } else {
      alert('We feed you, Garbage! 🗑')
    };
};

//how to write so that user input will always be first letter capitalizised?

// 4. Write a program to prompt the user to enter a year (like 2011, 2012, 2010, etc). 
// Based on the value entered, display the movie that won the Oscars for that year. 
// Just write this for last 8 years. 
// If he enters beyond last 8 years then alert the user to enter between 2003-2012.

function tellMeOscar() {
  let year = prompt('Enter a year between 2003-2012 to see what movie won the Oscars that year.')
  let answer = '';
    if(year === '2003') {
      answer = ' 🎥 In the 2003, the Oscar\'s\ Movie of the Year was \'Chicago\' directed by Rob Marshall 🎥' 
    } else if(year === '2004') {
      answer = ' 🎥 In 2004, the Oscar\'s Movie of the Year is \'The Lord of the Rings: Return of the King\' directed by Peter Jackson 🎥'
    } else if(year === '2005') {
      answer =' 🎥 In 2005, the Oscar\'s Movie of the Year is \'Million Dollar Baby\' directed by Clint Eastwood 🎥'
    } else if(year === '2006') {
      answer = ' 🎥 In 2006, the Oscar\'s Movie of the Year is \'Crash\' directed by Paul Haggis 🎥'
    } else if(year === '2007') {
      answer = ' 🎥 In 2007, the Oscar\'s Movie of the Year is \'The Depearted\' directed by Martin Scorsese 🎥'
    } else if(year === '2008') {
      answer = ' 🎥 In 2008, the Oscar\'s Movie of the Year is \'No Country for Old Men\' directed by Joel and Ethan Coen 🎥'
    } else if(year === '2009') {
      answer = ' 🎥 In 2009, the Oscar\'s Movie of the Year is \'Slumdog Millionaire\' directed by Danny Boyle🎥'
    } else if(year === '2010') {
      answer = ' 🎥 In 2010, the Oscar\'s Movie of the Year is \'The Hurt Locker\' directed by Kathryn Bigelow 🎥'
    } else if(year === '2011') {
      answer = ' 🎥 In 2011, the Oscar\'s Movie of the Year is \'The King\'s Speech\' directed by Tom Hopper 🎥'
    } else if(year === '2012') {
      answer = ' 🎥 In 2012, the Oscar\'s Movie of the Year is \'The Artist\' directed by Michel Hazanavicius 🎥'
    } else {
      answer = 'Please enter a year within the last 8 years (2003-2012)'
    };
  document.getElementById('winner').innerHTML = answer;
};

// 5. Write a program to prompt the user to enter the Grade of a student 
// (like A+, A, A-, B etc). Based on the value entered, 
// display terms like "Excellent", "Good Job", "Average" etc.

function gradeMe() {
  let grade = prompt('Enter the grade received. Ex: \'A+, A-. A, B+ and etc..\'')
  let response = '';
    if(grade ==='A+' || grade === 'A') {
      response = 'YOU ARE A CHAMPION! 🏆' 
    } else if(grade === 'A-' || grade === 'B+') {
      response = 'NEARLY PERFECT! HERE\'S\ A COOKIE! 🍪'  
    } else if(grade === 'B' || grade === 'B-') {
      response = 'ALMOST THERE! GREAT JOB 🎉' 
    } else if(grade === 'C+' || grade === 'C') {
      response = 'ROOM FOR IMPROVEMENT, LET\'S\ WORK ON THIS! 💪' 
    } else if(grade === 'C-' || grade === 'D+') {
      response = 'NEED\'S\ REVIEW, BOOK OFFICE HOURS 🙏' 
    } else if(grade === 'D' || grade === 'D-' || grade === 'F') {
      response = 'BOOK OFFICE HOURS ASAP PLEASE! 🏃‍♂️' 
    } else {
      response = 'Please enter a proper grade w/ Capitlization'
    };
  document.getElementById('response-display').innerHTML = response;
};