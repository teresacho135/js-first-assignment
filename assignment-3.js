
//--------------------------------------------------Assignment 3: Loops----------------------------------------------//

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

const counter = 1;
while (counter <= 100) {
  let notPrime = false;
  let iniial = 2;
  while(iniial <= counter - 1) {
    if(counter & initial === 0) {
      notPrime = true;
      break;
    }
    initial++
  }
  if(notPrime === false) {
    console.log(counter);
  }
  counter++
}
//not as time effiecient. 

