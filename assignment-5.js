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

// 6. Write a program to convert the above string to Lower case

const toLowerCase = (string) => {
  lowerCased = string.toLowerCase();
  console.log(lowerCased);
  return lowerCased;
};

// toLowerCase('HELLO');

// 7. Consider the string “I like this product; 
// I hate this product; This product is worth buying; 
// I don’t agree with the above user”.
//  Now break this whole string into pieces wherever you see 
//  “;”. Now print the broken down pieces one after the other in console.

const splitString = (string) => {
  splitted = string.split(';')
  console.log(splitted);
  return splitted;
};

// splitString('I like this product; I hate this product; This product is worth buying; I don’t agree with the above user');

// 8. For the above question 1, return the number of time the letter "o" appears.

const string = 'I like this product; I hate this product; This product is worth buying; I don’t agree with the above user'

const countOccurance = (char) => {
  let count = 0;
  for(let i = 0; i < string.length; i++) {
    if(string[i] === char) {
      count++;
    };
  };
  return count;
};

// console.log(countOccurance('o'));

// 9. Write a program to replace a particular term in a sentence (you can come up with a sentence). Replace with the term "javascript".
 const stringTwo = 'Hello, my name is Teresa';

 const replaced = stringTwo.replace('name', 'javascript');
//  console.log(replaced);

//  10. Find the number of times the string "not" appears in this sentence -
// a. " Javascript notation %^&* notes that structure rules and not context for nothing"
// b. Now, for the above problem 4, create an array with texts before and after "not" occurrences.
// (a).
const stringThree = 'Javascript notation %^&* notes that structure rules and not context for nothing'

const wordOccurance = (word) => {
  let count = 0;
  let splittedStrings = stringThree.split(' ');
  for(let i = 0; i < splittedStrings.length; i++) {
    if(splittedStrings[i] === word) {
      count++
    };
  };
  return count;
};

// console.log(wordOccurance('not'));

// (b). Now, for the above problem 4, create an array with texts before and after "not" occurrences.
// Confused w/ problem brief-does this mean that we return string when taking out the word 'not' or after it has been counted how many times 'not' has occurred in string. 
const splitNot = (string) => {
  let splitted = stringThree.split('not');
  console.log(splitted);
  return splitted
};

// splitNot(stringThree)


// 11. There is a link: http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/your
// info.jsp
// a. Alert- ‘contact us’
// b. Alert- ‘your info’
// c. Have two text fields- Replace ‘navigate’ , ‘contact’ with whatever the user enters in the text
// field and hits ‘submit’
// d. Have 3 text fields- whatever you enter in those text fields should replace ‘prompt1’,’prompt2’
// and prompt3’.Then ‘alert’ that. After 3rd alert, the whole new link should come up.
// http://www.pro-tekconsulting.com/main/navigate/about&us/contactus/email/
// firstname=prompt1 & lastname=prompt&ph_no=prompt3”

//Link is dead.
