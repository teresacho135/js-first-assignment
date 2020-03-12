
// IF ELSE STATEMENTS

// 1. Write a program to prompt the user for age. 
// If age is less than or equal to (<=) 14, alert "Not Allowed". 
// If age is greater than 14 and less than 65, alert "Regular Price".
// If age is equal to 50, alert "Special discount".

// function ageIs(age) {
//   if(age <= 14) {
//     alert('Not Allowed');
//   } else if(age > 14 && age < 65) {
//     alert('Regular Price')
//   } else if(age === 50) {
//     alert('Special Discount')
//   }
// }

// ageIs(50)

// 2. Write a program to prompt the user for age. 
// If age is equal to 14, alert "coupon 1". 
// If age is equal to 21, alert "coupon 2". 
// If age is equal to 30, alert "coupon 3". 
// If age is equal to 50, alert "coupon 4". Else alert "No coupon".

function ageIs(age) {
  if(age === 14) {
    alert('coupon 1')
  } else if(age === 21) {
    alert('coupon 2')
  } else if(age === 30) {
    alert('coupon 3')
  } else if(age === 50) {
    alert('coupon 4')
  } else {
    alert('No coupon')
  }
};

ageIs(14)

