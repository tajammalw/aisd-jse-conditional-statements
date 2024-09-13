
# JavaScript Basics: Conditional Statements

## Description 📄

In this project, you'll learn to use JavaScript's conditional statements to execute different parts of your code based on specific conditions. You'll start by understanding what conditional statements are, using the `if` statement to make decisions, and then expanding with the `else` statement for alternative outcomes. You'll also explore comparison operators, `truthy` and `falsy` values, data type checking, and logical operators (`AND`, `OR`, `NOT`).

## Expected Project Structure 🏗️

```
JavaScriptBasics/
└── index.js
```

# Instructions ✅

## 1. **Create the Project Folder and File**

- [ ] Create a folder named `JavaScriptBasics` to store your project files.
- [ ] Inside the `JavaScriptBasics` folder, create a file named `index.js`. This file will contain all your JavaScript code.

## 2. **Create a Conditional Statement using `if`**

The `if` statement is used to execute a block of code if a specified condition is `true`. This allows your program to make decisions and run code only when certain conditions are met.

- [ ] In your `index.js` file, add the following code to create a simple example of an `if` conditional statement:

```js
// Using `if` to check a condition
let weather = 'rainy';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: "Take an umbrella!"
}
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**

- The `if` statement checks whether the value of the variable `weather` is equal to `'rainy'`.
- If the condition `(weather === 'rainy')` is `true`, the code inside the curly braces `{}` is executed, which prints "Take an umbrella!" to the console.
- If the condition is `false` (for example, if the value of the variable `weather` is `'sunny'`), the code inside the `if` block will not run, and nothing will be printed.

## 3. **Expand Your Conditional with an `else` Statement**

The `else` statement can be added after an `if` statement to define an alternative block of code to execute when the `if` condition is `false`.

- [ ] In your `index.js` file, change the value of the `weather` variable to `"sunny"`. Do this by creating a new line that reassigns the variable, rather than modifying the original line where it is declared.
- [ ] Update your code to expand your example with an `else` statement:

```js
// Using `if` and `else` to handle different conditions
weather = 'sunny';

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
} else {
  console.log("Enjoy the sunshine!"); // Expected output: "Enjoy the sunshine!"
}
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**

- The `else` statement runs a block of code if the `if` condition is false.
- In this example, if the value of the variable `weather` is `'rainy'`, the `if` block runs and prints "Take an umbrella!".
- If the value of the variable `weather` is anything other than `'rainy'`, the `else` block runs instead, printing "Enjoy the sunshine!".
- This shows how you can provide an alternative action if the original condition isn't met, allowing your program to handle multiple scenarios.

## 4. **Add Multiple `if` Statements and Understand the `else` Catch-All**
When using multiple `if` statements, JavaScript evaluates each `if` condition from top to bottom. As soon as it finds a condition that is `true`, it runs the corresponding code block and stops checking any remaining conditions.

- [ ] In your `index.js` file, update your code to expand your example with multiple `if` statements:

```js
// Using multiple `if` statements to handle different scenarios
weather = 'sunny';

if (weather === 'sunny') {
  console.log("Wear sunglasses!"); // Expected output: "Wear sunglasses!"
}

if (weather === 'rainy') {
  console.log("Take an umbrella!"); // Expected output: (This will not print because the condition is false)
}

if (weather === 'snowy') {
  console.log("Wear a coat!"); // Expected output: (This will not print because the condition is false)
}
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**

- The value of the `weather` variable to is set to`"sunny"`.
- JavaScript checks each `if` statement in order:
    - The first `if` checks if `weather === 'sunny'`. This is true, so it prints "Wear sunglasses!" to the console.
    - Because a true condition is found, JavaScript stops evaluating further `if` statements. Therefore, it does not check `if (weather === 'rainy')` or `if (weather === 'snowy')`.

## 5. **Learn and Use Comparison Operators**

Comparison operators are used in conditions to compare values. Common operators include:

- [ ] `==` (equal to)
- [ ] `===` (strictly equal to)
- [ ] `!=` (not equal to)
- [ ] `!==` (strictly not equal to)
- [ ] `>` (greater than)
- [ ] `<` (less than)
- [ ] `>=` (greater than or equal to)
- [ ] `<=` (less than or equal to)

- [ ] In your `index.js` file, add the following code examples to demonstrate how comparison operators work:

```js
// Comparison Operators
let age = 18;
let minimumDrivingAge = '18';

console.log(age == minimumDrivingAge);  // true (loose equality, checks value only)
console.log(age === minimumDrivingAge); // false (strict equality, checks value and type)

// Using typeof to check the data types
console.log(typeof age);           // "number"
console.log(typeof minimumDrivingAge); // "string"

// More comparisons
console.log(age != minimumDrivingAge);  // false (loose inequality, checks value only)
console.log(age !== minimumDrivingAge); // true (strict inequality, checks value and type)

// Additional examples with greater than and less than
let personAge = 20;
let requiredAge = 18;

console.log(personAge > requiredAge);  // true (20 is greater than 18)
console.log(personAge < requiredAge);  // false (20 is not less than 18)
console.log(personAge >= requiredAge); // true (20 is greater than or equal to 18)
console.log(personAge <= requiredAge); // false (20 is not less than or equal to 18)
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**

- `==` compares only the values, so `age == minDrivingAge` is `true` even though one is a number and the other is a string.
- `===` compares both the values and data types. Since `typeof age` is `"number"` and `typeof minDrivingAge` is `"string"`, `age === minDrivingAge` is `false` because they have different types.
- `!=` checks if the values are not equal (ignoring type), so `age != minDrivingAge` is `false` since both have the same value.
- `!==` checks if the values or types are not equal, so `age !== minDrivingAge` is `true` because the types differ (`number` vs. `string`).
- `>`, `<`, `>=`, and `<=` are used for comparing numerical values to determine if one number is greater than, less than, or equal to another.

## 6. **Understanding Truthy and Falsy Values**

In JavaScript, certain values are treated as `true` or `false` when evaluated in a boolean context (like an `if` statement). These are known as "truthy" or "falsy" values. Examples of falsy values include `0`, `""` (empty string), `null`, `undefined`, `NaN` (not a number), and `false`. All other values are considered truthy.

- [ ] Add examples to `index.js` to explore truthy and falsy values:
- [ ] In your `index.js` file, add the following code examples to understand how truthy and falsy values work:

```js
// Truthy and Falsy Values Examples

age = 18;
minDrivingAge = '18';

// Comparison Operator with strict equality
if (age === minDrivingAge) {
  console.log("The ages are strictly equal."); // Expected output: (This will not print because the condition is false)
} else {
  console.log("The ages are not strictly equal."); // Expected output: "The ages are not strictly equal."
}

// Checking if a user input is truthy or falsy
let userInput;

if (userInput) {
  console.log("User input is truthy"); // Expected output: (This will not print because userInput is undefined and falsy)
} else {
  console.log("User input is falsy"); // Expected output: "User input is falsy"
}

// Assign a falsy value (0) and check its truthiness
userInput = 0;

if (userInput) {
  console.log("User input is truthy"); // Expected output: (This will not print because 0 is falsy)
} else {
  console.log("User input is falsy"); // Expected output: "User input is falsy"
}

// Assign a truthy value ('Hello') and check its truthiness
userInput = 'Hello';

if (userInput) {
  console.log("User input is truthy"); // Expected output: "User input is truthy"
} else {
  console.log("User input is falsy"); // Expected output: (This will not print because 'Hello' is truthy)
}
```
- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**
- The `if (age === minDrivingAge)` example shows that when comparing two different types (`number` vs. `string`), the strict equality operator (`===`) evaluates as `false`.
- When `userInput` is initially `undefined` or `0`, which are both falsy values, the `else` block runs, and "User input is falsy" is printed.
- When `userInput` is assigned `'Hello'`, a non-empty string (truthy value), the `if` block runs, and "User input is truthy" is printed.


## 7. **Logical Operators (`AND`, `OR`, `NOT`)**

Logical operators are used to combine multiple conditions:

- [ ] `&&` (AND) - true if all conditions are true.
- [ ] `||` (OR) - true if at least one condition is true.
- [ ] `!` (NOT) - inverts the value of a condition.

- [ ] In your `index.js` file, add the following code examples to understand how logical operators work:

```js
// Logical Operators

age = 18;
minDrivingAge = '18';
let hasLicense = false;

// Using && (AND) operator to check if both conditions are true
if (age == minDrivingAge && hasLicense) {
  console.log("You can drive."); // Expected output: (This will not print because hasLicense is false)
} else {
  console.log("You cannot drive."); // Expected output: "You cannot drive."
}

// Using || (OR) operator to check if at least one condition is true
if (age >= 18 || hasLicense) {
  console.log("You meet one of the requirements to drive."); // Expected output: "You meet one of the requirements to drive."
} else {
  console.log("You do not meet the requirements to drive."); // Expected output: (This will not print because age >= 18 is true)
}

// Using ! (NOT) operator to invert a condition
let isWeekend = false;
if (!isWeekend) {
  console.log("It's a weekday."); // Expected output: "It's a weekday."
}
```

- [ ] See your code in action: Run the JavaScript file in your terminal by entering the command `node index.js` and pressing Enter.

**Explanation:**

- AND `(&&)` Operator: Combines two conditions. In `age == minDrivingAge && hasLicense`, both conditions need to be true for the code inside the `if` block to execute. Since `hasLicense` is `false`, the `else` block runs instead.
- OR (`||`) Operator: Checks if at least one of the conditions is true. In `age >= 18 || hasLicense`, since `age >= 18` is `true`, the code inside the `if` block runs even though `hasLicense`is `false`.
- NOT (`!`) Operator: Inverts the value of a condition. In `if (!isWeekend)`, the `!` operator flips `isWeekend` from `false` to `true`, so "It's a weekday." is printed.

## 8. **Test Your Knowledge**

Practice writing additional conditional statements using what you've learned. Try checking multiple conditions, using logical operators, or combining different comparison operators.

## 9. **Commit and Push to Github**
- [ ] Commit and push your work to Github.

##

# Conclusion 📄

In this project, you learned how to use JavaScript conditional statements, comparison operators, truthy and falsy values, data type checking, and logical operators. These fundamental concepts are essential for making decisions in your code and writing dynamic and interactive JavaScript programs.

##

### Solution codebase 👀
🛑 **Only use this as a reference** 🛑

💾 **Not something to copy and paste** 💾

**Note:**  This lab references a solution file located [here](https://github.com/HackerUSA-CE/aisd-jse-conditional-statements/tree/solution) (link not shown).


---

© All rights reserved to ThriveDX
