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

//--------------------------------------------------Assignment 5: Loops----------------------------------------------//

// 1. Write a program to print (in console) 1-30 numbers with a line break.

const counting = () => {
  for(let i = 1; i <= 30; i++) {
    console.log(i)
  };
};

// counting();

// 2. Write a program to print numbers 1-10 in reverse order (like 10,9,8,7,6,....1) with a line break.

const reverseCount = () => {
  for(let i = 10; i >= 1; i--) {
    console.log(i)
  };
};

// reverseCount();

// 3. Write a program to print numbers from 12 to 33 and also at the end print the sum of all these numbers.
const numTotal = () => {
  let sum = 0;
  for(let i = 12; i <= 33; i++) {
    sum += i
  };
  console.log(sum)
};

// numTotal();
//a way to write so it will return w/o console.log?

// 4. Write a program to print (in console) 1-30 odd numbers with a line break

const oddNum = () => {
  for(let i = 1; i <= 30; i += 2) {
    console.log(i);
  };
};

// oddNum();

// 5. Write a program to print (in console) 1-30 even numbers with a line break

const evenNum = () => {
  for(let i = 0; i <= 30; i += 2) {
    console.log(i);
  };
};

// evenNum();

// 6. Write a program to print 1-100 prime numbers.


//number will be divisible by itself and one.If the remainder of our value with 
// the current loop value is zero 
// then we know it is not prime so break out and say so.

//--------------------------------------------------Assignment 5: If/Else and Loops----------------------------------------------//

// 1. Print numbers from 1 to 10

const countTen = () => {
  for(let i = 1; i <= 10; i++) {
    console.log(i);
  };
};

// countTen();

// 2. Print numbers from 10 to 1

const tenToOne = () => {
  for(let i = 10; i >= 1; i--) {
    console.log(i);
  };
};

// tenToOne();

// 3. Print odd numbers from 1 to 50

const oddOnly = () => {
  for(let i = 1; i <= 50; i += 2) {
    console.log(i);
  };
};

// oddOnly();

// 4. Print even numbers from 1 to 100

const evenOnly = () => {
  for(let i = 0; i <= 100; i += 2) {
    console.log(i);
  };
};

// evenOnly();

// 5. Numbers to be printed between 40 to 60

const fortyToSixty = () => {
  for(let i = 40; i <= 60; i++) {
    console.log(i);
  };
};

// fortyToSixty();

// 6. Numbers printed between 80 to 100

const eightyToHundred = () => {
  for(let i = 80; i <= 100; i++) {
    console.log(i);
  };
};

// eightyToHundred();

// 7. If you enter ‘1’ – it should print numbers between 1 to 11
// If you enter ‘2’- it should print numbers between 2 to 12
// If you enter ‘3’- it should print numbers between 3 to 13
// If you enter ‘4’-it should print numbers between 4 to 14
// If you enter ‘5’-it should print numbers between 5 to 15

const numCount = (num) => {
  if(num === '1') {
    for(let i = 1; i <= 11; i++) {
      console.log(i);
    };
  } else if(num === '2') {
    for(let i = 2; i <= 12; i++) {
      console.log(i);
    };
  } else if(num === '3') {
    for(let i = 3; i <= 13; i++) {
      console.log(i);
    };
  } else if(num === '4') {
    for(let i = 4; i <= 14; i++) {
      console.log(i);
    };
  } else if(num === '5') {
    for(let i = 5; i <= 15; i++) {
      console.log(i);
    };
  } else {
    console.log('Please enter a number');
  };
};

// numCount('5');

// 8. If the value is entered ‘123’, alert should be ‘One Two Three’
// If the value is entered ‘124’, alert should be ‘One Two Four’
// If the value is entered ‘125’, alert should be ‘One Two Five’
// If the value is entered ‘126’, alert should be ‘One Two Six’
// If the value is entered ‘127’, alert should be ‘One Two Seven’

const alertNums = (val) => {
  if(val === '123') {
    alert('One Two Three');
  } else if(val === '124') {
    alert('One Two Four');
  } else if(val === '125') {
    alert('One Two Five');
  } else if(val === '126') {
    alert('One Two Six');
  } else if(val === '127') {
    alert('One Two Seven');
  } else {
    alert('input another value');
  };
};

// alertNums('123');

// 9. If I enter ‘1’, alert should be ‘One’
// If I enter ‘2’, alert should be ‘Two’
// If I enter ‘3’, alert should be ‘Three’
// If I enter ‘4’, alert should be ‘Four’
// If I enter ‘5’, alert should be ‘Five’
// Else, please enter a valid number.
 
const numAlert = (val) => {
  if(val === '1') {
    alert('One');
  } else if(val === '2') {
    alert('Two');
  } else if(val === '3') {
    alert('Three');
  } else if(val === '4') {
    alert('Four');
  } else if(val === '5') {
    alert('Five');
  } else {
    alert('Please enter a valid number 1-5');
  };
};

// numAlert('2');

// 10. If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’
// If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’
// If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’
// If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’
// If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’

function guessNum (num) {
  num = prompt('Guess a number.');
  if(num > 1 && num < 10) {
    alert('the number is between 1 and 10')
  } else if(num > 11 && num < 20) {
    alert('the number is between 11 and 20');
  } else if(num > 21 && num < 30) {
    alert('the number is between 21 and 30');
  } else if(num > 31 && num < 40) {
    alert('the number is between 31 and 40'); 
  } else if(num > 41 && num < 50 ) {
    alert('the number is between 41 and 50');
  } else {
    alert('please enter a number between 1-50');
  };
};

// 11. If the number is less than 50 or greater than 200, alert the number is a valid number
// If the number is between 50 and 200, alert this is a good number.
// Else, alert ‘It is an invalid number’.

const alertAlert = (num) => {
  if(num < 50 || num > 200) {
    alert('this number is a valid number.');
  } else if(num > 50 && num < 200) {
    alert('this is a good number.')
  } else {
    alert('It is an invalid number.');
  };
};

// alertAlert(60)

// 12. If I enter ‘One’, alert ‘1’
// If I enter ‘Two’, alert ‘2’
// If I enter ‘Three’, alert ‘3’
// If I enter ‘Four’,alert ‘4’
// If I enter ‘Five’, alert ‘5’

const alertNumPrompt = (num) => {
  num = prompt('enter a number between One thru Five');
  if(num === 'One') {
    alert('1');
  } else if(num === 'Two') {
    alert('2');
  } else if(num === 'Three') {
    alert('3');
  } else if(num === 'Four') {
    alert('4');
  } else if(num === 'Five') {
    alert('5');
  } else {
    alert('enter one thru five');
  };
};

//can futureproof this more. 

// 13. If I enter numbers Six to Ten, please enter a proper number. 
// Anything else, please enter a valid number.

const alertInput = (num) => {
  num = prompt('enter a number Six to Ten');
  parsedNum = parseInt(num);
  if(parsedNum => 6 && parsedNum <= 10) {
    alert('please enter a proper number')
  } else {
    alert('please enter a valid number');
  };
};

//will not return correct alert for 6 and 10. 

// 14. If I enter an even number, I want next 10 even numbers to be printed. 
// If I enter an odd number, I want next 10 odd numbers to be printed.

const evenOrOdd = (num) => {
  num = prompt('enter a number');
  parsedNum = parseInt(num);
  if(parsedNum % 2 === 0) {
    for(i = parsedNum; i <= parsedNum + 20; i+= 2) {
      document.getElementById('even-to-ten').innerHTML = i
    }
  } else if(parsedNum % 2 !== 0) {
    for(i = parsedNum; i <= parsedNum + 19; i+= 2) {
      document.getElementById('odd-to-ten').innerHTML = parsedNum
    }
  }
  // } else {
  //   document.getElementById('even-to-ten').innerHTML = parsedNum
  }

  //cannot seem to get html to display - will work in console.log

  // 15. If I enter an even number, I want previous 5 even numbers to be printed. 
  // If I enter an odd number, I want previous 5 odd numbers to be printed.

  // because I couldn't figure out last question, will only be answering this question using console.log

  const prevNum = (num) => {
    if(num % 2 === 0) {
      for(i = num; i >= num - 9; i -= 2) {
        console.log(i);
      };
    } else if(num % 2 !== 0) {
      for(i = num; i >= num - 9; i -= 2) {
        console.log(i);
      };
    } else {
      return num;
    };
  };

  // prevNum(7)

//--------------------------------------------------Assignment 5: Strings----------------------------------------------//

// 1. What is the result of “3”+5+6.
const result = () => {
  res = '3' + 5 + 6
  console.log(res);
};

// should return '356' becomes a complete string.
// result();

// 2. What is the result of 3+”5”+6
const resultQ2 = () => {
  res = 3 + '5' + 6;
  console.log(res);
  console.log(typeof(res));
};

// resultQ2();
// should return '356', becomes a whole string;

// 3. What is the result of 3+5+”6”

const resultQ3 = () => {
  res = 3 + 5 + '6';
  console.log(res);
  console.log(typeof(res));
};

// resultQ3();
// should return '356' as whole string
// !! adds 3 + 5 and concats 6 to become a string in the end
// answer is '86'

// 4. Write a program to return the length of a string 
// "Pneumonoultramicroscopicsilicovolcanoconiosis".

const lengthOfString = (string) => {
  length = string.length;
  console.log(length);
  return length;
};

// lengthOfString("Pneumonoultramicroscopicsilicovolcanoconiosis");
// returns '45'

// 5. Write a program to convert the above string to Upper case

 const toUpperCase = (string) => {
   upperCased = string.toUpperCase();
   console.log(upperCased);
   return upperCased;
 };

//  toUpperCase('hello');


