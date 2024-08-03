// 1.Understanding Data Types in JavaScript
// Task 1: Declare variables to represent student information such as name, age, 
//grade, and attendance status.
let studentName;
let studentAge;
let studentGrade;
let studentAttendance;

// Task 2: Assign sample values to the student information variables.
studentName = "James Zhang";
studentAge = 69;
studentGrade = "1st Grade";
studentAttendance = true; // true means present, false means absent

// Task 3: Display the student information using console.log() statements.
console.log("Student Name: " + studentName);
console.log("Student Age: " + studentAge);
console.log("Student Grade: " + studentGrade);
console.log("Student Attendance: " + (studentAttendance ? "Present" : "Absent"));




// 2.Exploring JavaScript Operators
// Task 1: Declare variables to store two numeric values for performing arithmetic operations.
let num1;
let num2;

// Task 2: Assign sample numeric values to the variables declared in Task 1.
num1 = 10;
num2 = 5;

// Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

// Task 4: Explore assignment operators and update the values of variables.
num1 += 3; // num1 = num1 + 3
num2 *= 2; // num2 = num2 * 2
console.log("Updated num1:", num1);
console.log("Updated num2:", num2);

// Task 5: Use comparison operators to compare the values of variables.
console.log("Is num1 equal to num2?", num1 === num2);
console.log("Is num1 greater than num2?", num1 > num2);
console.log("Is num1 not equal to num2?", num1 !== num2);

// Task 6: Apply logical operators to combine conditions and display the results.
let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 === 0 || num2 % 2 === 0;
console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);
