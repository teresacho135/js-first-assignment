


//--------------------------------------------------Assignment 6: Arrays----------------------------------------------//

// 1. Write a program to display 10 quotes (one after the other in sequence). Hint: use Arrays to store the quotes (sayings). Name the function as displayQuotes.

const authorQuotes = [
  '\'Write hard and clear about what hurts\' - Ernest Hemingway',
  '\'Don\'t be \'a writer\' be writing.\'- William Faulkner',
  'You\'ll turn out ordinary if you\'re not careful.\' -Ann Brashares',
  '\'One day I will find the right words, and they will be simple\' - Jack Kerouac',
  '\'Either write something worth reading or do something worth writing\' - Benjamin Franklin',
  '\'We write to taste life twice, in the moment and in retrospect\' - Anais Nin',
  '\'Subsitute \'damn\' every time you\'re inclined to write \'very\', your editor will delete it and the writing will be as it should be\' - Mark Twain',
  '\'You must stay drunk on writing so reality cannot destroy you.\' - Ray Bradbury',
  '\'I can shake off everything as I write; my sorrow disappears, my courage is reborn\' - Anne Frank',
  '\'Let me live, love, and say it well in good sentences.\' - Sylvia Plath',
];

const displayQuotes = () => {
  for(let i = 0; i < authorQuotes.length; i++) {
    // console.log(authorQuotes[i]);
    window.alert(authorQuotes[i]);
  };
};

// 2. Create a function that accepts a parameter which is of the type Array 
// and alerts the length of the array as well as the elements one after the other 
// starting from 4th element. Call this function from displayQuotes function that 
// you created in Question 1.

//having trouble with this question

// 3. For the above created array, perform the following operations on an array.
// a. pop()
// b. Now check the length and print it to console
// c. reverse()
// d. Now access the 8th array element and print it to console
// e. shift()
// f. Now check the length and print it to console
// g. sort()

// a. pop();
// authorQuotes.pop();
// console.log(authorQuotes);

//removes the last quote in the array.

// b. Now check the length and print it to console
// console.log(authorQuotes.length);
//returns back '9'

// c. reverse()
// authorQuotes.reverse();
// console.log(authorQuotes);
//reverses the entire array; first being last and last being first.

// d. Now access the 8th array element and print it to console
// console.log(authorQuotes[8]);
//returns the Ernest Hemingway quote.

// e. shift()
// authorQuotes.shift();
// console.log(authorQuotes);
// removes the first item of an array, Anne Frank quote is now removed.

// f. Now check the length and print it to console
// console.log(authorQuotes.length);
// returns '8'

// g. sort()
// authorQuotes.sort();
// console.log(authorQuotes);
//sorts the array but idk by what order.

// 4. Prompt the user for appropriate values based on the operation that you are performing and then execute the following operations on the array:
// a. push()
// b. Now check the length and print it to console
// c. unshift()
// d. Now check the length and print it to console
// e. splice()
// f. Now check the length and print it to console. Now access the 5th array element and print it to console.
// g. slice()

// a. push()

const newQuote = '\Hit me with your best shot\' - Pat Benatar';

const pushQuote = (newQuote) => {
  authorQuotes.push(newQuote);
};

pushQuote(newQuote);
// console.log(authorQuotes);
//having error w/ node.js using prompt (returns prompt is undefined.)

// b. Now check the length and print it to console
// console.log(authorQuotes.length);
//Returns back 11 - one extra quote now added. 

// c. unshift()
authorQuotes.unshift('Hello, is you I\'m looking for? - Lionel Richie');
// console.log(authorQuotes);

// d. Now check the length and print it to console
// console.log(authorQuotes.length);
//returns back 12- quote is added to the front. 

// e. splice()
authorQuotes.splice(1, 0, 'Do you believe in life after love? - Cher', 'Roads? Where we\'re going, we don\'t need roads! - Back to the Future');
// console.log(authorQuotes);
// array.splice( index, howmany, item1, item2,....)

// f. Now check the length and print it to console. Now access the 5th array element and print it to console.
// console.log(authorQuotes.length)
//returns 14, with two quotes now added. 
// console.log(authorQuotes[5]);
//returns the Ann Brashares quote.

// g. slice()
// console.log(authorQuotes);
const miscQuotes = authorQuotes.slice(0, 3);
// console.log(miscQuotes);
//takes indexes 0-3 in authorQuotes and saves it into a variable called miscQuotes.

// 5. Create a Months Array (jan, feb, mar...etc) and repeat question 3 and 4. 
// Once you implement these two arrays, use concat() method to add these arrays. 
// Print each of the elements of this concatenated array one after the other
//  - hint: use loops.

const months = [
  'January', 
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];


// a. pop()
// b. Now check the length and print it to console
// c. reverse()
// d. Now access the 8th array element and print it to console
// e. shift()
// f. Now check the length and print it to console
// g. sort()

// a.pop()
months.pop();
// console.log(months);
// took off december. 

// b. Now check the length and print it to console
// console.log(months.length);
//returns 11

// c. reverse()
months.reverse();

// d. Now access the 8th array element and print it to console
// console.log(months[8]);
//returns March;

// e. shift()
months.shift();

// f. Now check the length and print it to console
// console.log(months.length);
//returns 10

// g. sort()
months.sort();

const monthsTwo = [
  'January', 
  'Febuary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// a. push()
// b. Now check the length and print it to console
// c. unshift()
// d. Now check the length and print it to console
// e. splice()
// f. Now check the length and print it to console.
//  Now access the 5th array element and print it to console.
// g. slice()

// a. push();
monthsTwo.push('new month');

// b. Now check the length and print it to console
// console.log(monthsTwo.length);
//returns 13;

// c. unshift()
monthsTwo.unshift('month in the front');

// d. Now check the length and print it to console
// console.log(monthsTwo.length);
//reuturns 14;

// e. splice()
monthsTwo.splice(2, 0, 'This should be the third month');
// console.log(monthsTwo);

// f. Now check the length and print it to console.
//  Now access the 5th array element and print it to console.
// console.log(monthsTwo.length);
//returns 15;
// console.log(monthsTwo[5]);
//April

// g. slice()
const slicedMonths = monthsTwo.slice(0,3);
// console.log(slicedMonths);

const monthsCombined = months.concat(monthsTwo)
const monthsArray = [];
const addAllMonths = (array) => {
  for(let i = 0; i < array.length; i++) {
    monthsArray.push(array[i]);
  }
  console.log(monthsArray);
};

// addAllMonths(monthsCombined);

// 6. Create an array with Monday, Tuesday,Wednesday,Thursday, 
// Friday and Saturday and console.log individually.

const daysOfWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const loggingDays = (array) => {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  };
};

// loggingDays(daysOfWeek);