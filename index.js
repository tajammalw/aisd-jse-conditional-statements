// Uncomment the code to see examples run properly in each scenario

let weather = 'rainy';

// // Step 2.
// // Using `if` to check a condition

// if (weather === 'rainy') {
//   console.log("Take an umbrella!"); // Expected output: "Take an umbrella!"
// }


// // Step 3.
// // Using `if` and `else` to handle different conditions
// weather = 'sunny';

// if (weather === 'rainy') {
//   console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
// } else {
//   console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine!"
// }


// // Step 4.
// // Using multiple `if` statements to handle different scenarios
// weather = 'sunny';

// if (weather === 'sunny') {
//   console.log("Wear sunglasses!"); // Expected output: "Wear sunglasses!"
// }

// if (weather === 'rainy') {
//   console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
// }

// if (weather === 'snowy') {
//   console.log("Wear a coat!"); // Expected output: (This will not print because the condition is false)
// }


// // Step 5.
// // Comparison Operators
let age = 18;
let minimumDrivingAge = '18';

// console.log(age == minimumDrivingAge);  // true (loose equality, checks value only)
// console.log(age === minimumDrivingAge); // false (strict equality, checks value and type)

// // Using typeof to check the data types
// console.log(typeof age);           // "number"
// console.log(typeof minimumDrivingAge); // "string"

// // More comparisons
// console.log(age != minimumDrivingAge);  // false (loose inequality, checks value only)
// console.log(age !== minimumDrivingAge); // true (strict inequality, checks value and type)

// // Additional examples with greater than and less than
// let personAge = 20;
// let requiredAge = 18;

// console.log(personAge > requiredAge);  // true (20 is greater than 18)
// console.log(personAge < requiredAge);  // false (20 is not less than 18)
// console.log(personAge >= requiredAge); // true (20 is greater than or equal to 18)
// console.log(personAge <= requiredAge); // false (20 is not less than or equal to 18)


// // Step 6.
// // Truthy and Falsy Values Examples
// age = 18;
// minDrivingAge = '18';

// // Comparison Operator with strict equality
// if (age === minDrivingAge) {
//   console.log("The ages are strictly equal."); // Expected output: (This will not print because the condition is false)
// } else {
//   console.log("The ages are not strictly equal."); // Expected output: "The ages are not strictly equal."
// }

// // Checking if a user input is truthy or falsy
// let userInput;

// if (userInput) {
//   console.log("User input is truthy"); // Expected output: (This will not print because userInput is undefined and falsy)
// } else {
//   console.log("User input is falsy"); // Expected output: "User input is falsy"
// }

// // Assign a falsy value (0) and check its truthiness
// userInput = 0;

// if (userInput) {
//   console.log("User input is truthy"); // Expected output: (This will not print because 0 is falsy)
// } else {
//   console.log("User input is falsy"); // Expected output: "User input is falsy"
// }

// // Assign a truthy value ('Hello') and check its truthiness
// userInput = 'Hello';

// if (userInput) {
//   console.log("User input is truthy"); // Expected output: "User input is truthy"
// } else {
//   console.log("User input is falsy"); // Expected output: (This will not print because 'Hello' is truthy)
// }


// // Step 7.
// // Logical Operators

// age = 18;
// minDrivingAge = '18';
// let hasLicense = false;

// // Using && (AND) operator to check if both conditions are true
// if (age == minDrivingAge && hasLicense) {
//   console.log("You can drive."); // Expected output: (This will not print because hasLicense is false)
// } else {
//   console.log("You cannot drive."); // Expected output: "You cannot drive."
// }

// // Using || (OR) operator to check if at least one condition is true
// if (age >= 18 || hasLicense) {
//   console.log("You meet one of the requirements to drive."); // Expected output: "You meet one of the requirements to drive."
// } else {
//   console.log("You do not meet the requirements to drive."); // Expected output: (This will not print because age >= 18 is true)
// }

// // Using ! (NOT) operator to invert a condition
// let isWeekend = false;
// if (!isWeekend) {
//   console.log("It's a weekday."); // Expected output: "It's a weekday."
// }