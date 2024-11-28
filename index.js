document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter: 21-40.<br> <br>  </h1>`)

 // ------------------------- STRING METHODS ---------------------

/////////////////////////////  Assignment # 21-25

///////// question 1.
//  Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");
// var fullName =  firstName + " " + lastName;
// alert("Hello " + fullName + " !");


///////// question 2.
// . Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var model = prompt("What is your favorite mobile Phone model ?", "Samsung");
// var length = model.length;

// document.write("My Favourite Phone is : " + model + "</br>" +
// "Length of string: " + length);


///////// question 3.
//  Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// var word = "Pakistani";

// document.write ("Country : " + word + "<br> Index of n  is : " + word.indexOf("n"));

///////// question 4.
// Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser

//  var str = "Hello World";

//  document.write ("String : " + str + "<br> last index of  l is : " + str.lastIndexOf("l"));


///////// question 5.
// Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser

// var country = "Pakistani"
// document.write ("String : " + country + "<br> Character at index 3  : " + country[3]);

///////// question 6.
// Repeat Q1 using string concat() method.

// var firstName = prompt("Enter Your First name");
// var lastName = prompt("Enter Your Last name");
// var fullName = firstName.concat(" " + lastName);

// alert("Hello " + fullName + " !");

///////// question 7.
// Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// var city2 = city.replace("Hyderabad", "Islamabad");
// document.write("City : " + city + "</br>" + "After replacement : " + city2);

///////// question 8.
// . Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together. ";
// document.write("Message : " + message + "<br>");
// message = message.replace(/and/g , "&")
// document.write("After replacement : " +  message );

///////// question 9.
// Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// var strNum = "472";
// var strNum2 = parseInt(strNum);
// document.write("Value : " + strNum + "</br>" + "Type : " + typeof(strNum) + "</br>" +"Value : " + strNum2 + "</br>" + "Type : " + typeof(strNum2) + "</br>");

///////// question 10.
// Write a program that takes user input. Convert and
// show the input in capital letters.

// var userInput = prompt("Enter Favourite Things",);
// var uppercase = userInput.toLocaleUpperCase();
// document.write("User input : " + userInput + "</br> Upper case : " + uppercase);


///////// question 11.
// . Write a program that takes user input. Convert and
// show the input in title case.


// var userInput = prompt("Enter a string to convert to title case:");
// var titleCase = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("Original Input: " + userInput + " </br> Title Case: " + titleCase);

///////// question 12.
// Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// var numString = num.toString();
// var result = numString.replace('.', '');
// document.write(" Number: " + num + " </br> Result : " + result);

///////// question 13.
// Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = prompt("Enter your username:");

// if (username.includes("@") || username.includes(",") || username.includes(".") || username.includes("!")) {

//   alert("Invalid username! Your username cannot contain '@', '.', ',', or '!'.");

// } 
// else {
//   alert("Your valid username is: " + username);
// }

///////// question 14.
// You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

// var bakertItems = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Welcome to my bakery. What do you want to order sir/ma'am ?").toLowerCase();
// var flag = false;


// for (var i = 0; i <= bakertItems.length -1; i++) {

//     if (userInput == bakertItems[i].toLowerCase()) {
//         flag = true;
//         alert(userInput +" is  available  at index " + i + " in our bakery.")
//         break;
//     }

// }
// if(!flag){
//     alert(userInput + " is  not available in our bakery. ")
// }

///////// question 15.
// Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// var password = prompt("Enter your password:");

// if (password[0] >= '0' && password[0] <= '9') {
//     alert("Password cannot begin with a number");
// } 
// else if (password.length < 6) {
//     alert("Password must be at least 6 characters long");
// } 
// else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)) {
//     alert("Password must contain both alphabets and numbers");
// } 
// else {
//     alert("Please enter a  valid Password ");
// }

//////// question 16:
// Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.


// var university = "University of Karachi";
// var arr = university.split("");

// var i = 0;
// while (i < arr.length)
// {
//   document.write (arr[i] + "</br>");
//   i++;
// }

//////////// question 17:
// Write a program to display the last character of a userinput.

// var userInput = prompt("Enter country name");
// document.write ( 'User input : ' + userInput +"<br> Last Character of input : " + userInput[userInput.length-1]);

//////////// question 18:
// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog.";

// var matches = str.match(/the/gi)

// document.write("Text : " + str + "</br> There are " + matches.length + " Occurrence(s) of word '" + matches[1] + "'."); 


 // ------------------------- MATH METHODS ---------------------

 ///////////////////////////////// Assignment # 26-30 


 /////// question 1.
//   Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var userInput = +prompt("Enter a number in decimals" , 3.45214);

// var round = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput)
// document.write ("Number : " + userInput + "<br> Round off value : " + round + "<br> Floor value : " + floor + "<br> Ceil value : " + ceil);


/////// question 2.
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var userInput = +prompt("Enter a negative number in decimal." , -2.673);

// var round = Math.round(userInput);
// var floor = Math.floor(userInput);
// var ceil = Math.ceil(userInput)
// document.write ("Number : " + userInput + "<br> Round off value : " + round + "<br> Floor value : " + floor + "<br> Ceil value : " + ceil);

/////// question 3.
// . Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var num = +prompt("Enter a number.");
// var absolute = Math.abs(num);

// document.write("The absolute value of  " + num + " is " + absolute);


///////////////// question 4:
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:


// var num = + prompt("Enter  a number");
// var input = Math.random() * 10;
// var floor = Math.floor(input) + 1;
// document.write("Random dice value is : " + num + "<br>" );
// document.write("Random dice value is : " + floor + "<br>" );


///////////////// question 5:
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// var head = 1;
// var tail = 2;
// var toss = Math.random()*2;
// var floor =Math.floor(toss);

// if (floor === 0) {
//   document.write(`1 </br> Random coin value : Tails`);
// }else if (floor === 1) {
//   document.write(`2 </br> Random coin value : Heads`);
//  }

///////////question 6:
// Write a program that shows a random number between 1
// and 100 in your browser.

// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write("<b>Random number between 1 and 100:</b> " + randomNumber);


///////////question 7:
// Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs etc....):");
// var weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     document.write("<b>Your weight is:</b> " + weight + " kilograms");
// } else {
//     document.write("<b>Invalid input. Please enter a valid weight.</b>");
// }


//////////// question 8:
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var secret = Math.random() * 10;
// var secretnumber = Math.floor(secret) + 1;
// var guess = +prompt("Guess a number between 1 and 10");
// if(guess === secretnumber){
//     document.write("You have guessed the number correctly");
// }
// else if(guess === secretnumber + 1 || guess === secretnumber - 1){
//     document.write("You are too closed to the corect number");
// }
// else(
//     document.write("You have guessed the number incorrectly")
// )


 // -------------------------  DATE METHODS  ---------------------

 ///////////////////////////////// Assignment # 31-34


 /////// question 1.
//  Write a program that displays current date and time inyour browser.

// var currentDate = new Date ();
// document.write(currentDate);

 /////// question 2.
// Write a program that alerts the current month in words.
// For example December.


// var today = new Date();
// var months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// var currentMonth = months[today.getMonth()];
// document.write("The current month is: " + currentMonth);

/////// question 3.
// . Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.


// var today = new Date();
// var days = [
//     "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];
// var currentDay = days[today.getDay()];
// document.write("The current day is: " + currentDay);

/////// question 4.
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

// var userInput = prompt("Enter any day");

// if(userInput === "saturday" || userInput === "sunday"){
// alert("It's a fun day")
// }
// else{
//     alert("It's working  day")
// }


/////// question 5.
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.


// var today = new Date();
// var currentDate = today.getDate();
// if (currentDate < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

/////// question 6.
// . Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var currentdate = new Date()
// var date1 = currentdate.getTime();
// var minute = date1 / 60000;
// document.write("<br>Current date : "+ currentdate);
// document.write("<br>Elapsed milliseconds since Jan 1, 1970: "+date1);
// document.write("<br>Elapsed minutes since Jan 1, 1970: "+minute);
// document.write(date1);
// document.write(minute);


/////// question 7.
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.


// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }


/////// question 8.
// . Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate

// var laterDate = new Date(2020, 11, 31); 
// document.write(" Later date : " + laterDate);


/////// question 9.
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015


// var date1 = new Date(2024, 9, 23);
// var date2 = new Date(2024, 2, 14);

// var timeofdate1 = date1.getTime();
// var timeofdate2 = date2.getTime();

// var finalTime = timeofdate1 - timeofdate2;

// var time = finalTime / (1000 * 60 * 60 * 24);
// alert(time + " days have passed since 1 Ramzan , 2024");


/////// question 10.
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.


// var date1 = new Date(2024, 11, 23);
// var date2 = new Date(2024, 11, 10);

// var timeofdate1 = date1.getTime();
// var timeofdate2 = date2.getTime();

// var timed = timeofdate1 - timeofdate2;

// var time = timed / 1000;
// document.write("On reference date : " + date1 + "<br>");
// document.write(time + " seconds have passed since 16 October 2024")

/////// question 11.
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.



// var currentdate = new Date(); 
// var currentHour = currentdate.getHours(); 
// document.write("Current date: " + currentdate + "<br>" + "<br>");

// currentdate.setHours(currentHour + 1);
// document.write("1 hour after it will be: " + currentdate + "<br>");


/////// question 12.
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// document.write("Current date: " + currentDate + "<br>" + "<br>");
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// document.write("100 years back, it was: " + currentDate );

/////// question 13.
// . Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.



// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - age;
// document.write("Your age is : " + age  + "  . <br>" + "<br>");
// document.write("You were born in the year: " + birthYear);

/////// question 14.
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// DATE METHODS | JAVASCRIPT
// Page 5 of 5
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


// document.write("<h1>K-Electric Bill</h1>")

// var customer = "Khalid";
// var month = "November";
// var units = 300;
// var charges = 22;
// var netamount = units * charges;
// var latecharge = netamount + 1500;

// document.write("Customer name : " + customer + "<br>");
// document.write("Month : " + month+ "<br>");
// document.write("Number of units : " + units + "<br>");
// document.write("Charges of units : " + charges + "<br> <br>");
// document.write("Net Amount Payable (within Due Date) : " + netamount + "<br>");
// document.write("Late payment surcharg : 1400"+ "<br>" );
// document.write("Gross Amount Payable (after Due Date) : " + latecharge + "<br>" );

// ------------------------- FUNCTION  ---------------------

 ///////////////////////////////// Assignment # 35-38


 /////// question 1.
//   Write a function that displays current date & time in yourbrowser.

// function date() {
//     return document.write(new Date());
      
//     }
//     date();

/////// question 2.
// . Write a function that takes first & last name and then it
// greets the user using his full name.

// function greet(){
//      var first = prompt("Enter your first name");
//      var last = prompt("Enter your last name");
//      var fullname = first + " " + last;
//      document.write("Hello, " + fullname + " !");
// }

// greet();


/////// question 3.
// Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function add(){
//     var num1 = parseInt(prompt("Enter first number"));
//     var num2 = parseInt(prompt("Enter second number"));
//     var addition = num1 + num2;
//     document.write("The sum of " + num1 + " and " + num2 + " is " + addition );
// }

// add();

/////// question 4.
// Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function calculator(num1, num2, operator) {
//     var result;

//     if (operator === '+') {
//         result = num1 + num2;
//     } else if (operator === '-') {
//         result = num1 - num2;
//     } else if (operator === '*') {
//         result = num1 * num2;
//     } else if (operator === '/') {
//         if (num2 !== 0) {  
//             result = num1 / num2;
//         } else {
//             result = "Error: Division by zero!";
//         }
//     } else {
//         result = "Invalid operator!";
//     }
//     document.write("Result: " + result);
// }

// calculator(10, 5, '*');  




/////// question 5.Write a function that squares its argument.
// function square(number) {

//     return (number * number)
// }
// document.write("The square of arguments 4 is " + square(4));

/////// question 6. Write a function that computes factorial of a number.


// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1
//     } else if (num < 0) {
//         throw new Error("Factorial is not defined for negative numbers");
//     } else {
//         var result = 1
//         for (var i = 2; i <= num; i++) {
//             result *= i
//         } return result
//     }
// }
// var number = +prompt('Enter a number to findout the factorial! ')
// var factor = factorial(number)
// document.write(factor);

//////////////////////////////// question 7.
// Write a function that take start and end number as inputs
// & display counting in your browser.


// function counting (start , end){
//         if(start < end){
//             document.write('Forward counting' + "<br>");
//             for(var i = start ; i <= end ; i++){
//                 document.write (i);
    
//             }
//         }else if (end < start){
//             document.write('Backward counting'+ "<br>");
//             for(var i = start ; i >= end ; i--){
//                 document.write(i);            
//             }
//         }
//     }
    
//     var num1 = +prompt('Enter a start number: ')
//     var num2 = +prompt('Enter an end number: ')
//     counting(num1 ,num2);


//////////////////////// question 8.
// Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function | JAVASCRIPT
// Page 2 of 4
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

// function outer(base, perpendicular){

//         function inner(){
    
//             var base = parseInt(prompt("Enter the value of base"));
//             var perpendicular = parseInt(prompt("Enter the value of perpendicular"));
//             var Hypotenuse = (base * base ) + (perpendicular * perpendicular);
//             return Hypotenuse;
    
//         }
    
//         Hypotenuse = inner();
//         return Hypotenuse;
//     }
    
//     document.write("The hypotenuse of triangle is " + outer() + "<br>");


////////////// question 9.
// . Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculateArea (width  , height){
//     return width * height
// }


// var  width2= +prompt('Enter the value for width: ')
// var height2 = +prompt('Enter the value for height: ')
// var area = calculateArea(width2 , height2)
// document.write( 'Area of a rectangle: ' + area);
// var area = calculateArea(4 , 8)
// document.write( 'Area of a rectangle: ' + area);


////////////// question 10.
// 0. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// var word = prompt("Enter Palindrome word", "madam");

// function palindrome(str) {

//   var reverseStr = word.split('').reverse().join('');
//   if (word === reverseStr) {
//     document.write("String is Palindrome");
//   } else {
//     document.write("String is not Palindrome");
//   }
// }
// palindrome(word);


////////////// question 11.
// . Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function capitailze( str) {
//     var splitString = str.split(' ');
//     var subString
//     var join = ''
//     for (var i = 0; i < splitString.length; i++) {
//         subString = splitString[i].charAt(0).toUpperCase() + splitString[i].slice(1)
//         join += subString + ' ';

//     } return join
// }

// var str = prompt('Enter any string!')
// document.write(capitailze(str.trim()));


/////////////////////////// question 12.
// Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'


// function findLongestWord(str) {
//     var words = str.trim().split(' ');

//     var longestWord = '';
//     var maxLength = 0;

//     for (var i = 0; i < words.length; i++) {
//         if (words[i].length > maxLength) {
//             longestWord = words[i];
//             maxLength = words[i].length;
//         }
//     }
//     return longestWord;
// }

// var str =' Web Development Tutorial';
// document.write(findLongestWord(str)); 




/////////////// question 13.
// Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// function | JAVASCRIPT
// Page 3 of 4
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'


// function countOccurrences(string, letter) {
//     var count = 0;  
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === letter) {
//             count++; 
//         }
//     }
//     return count;
// }

// var string = "JSResourceS.com";
// var letter = "o";
// var result = countOccurrences(string, letter);
// document.write("The letter '" + letter + "' occurs " + result + " times in the string '" + string + "'.");
  

///////////////////////////////////// question 14.
// The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = Math.PI * Math.pow(radius, 2);
//     document.write("The area is " + area.toFixed(2) + "<br>");
// }


// var radius =  +prompt('Enter a number.'); 
// calcCircumference(radius);
// calcArea(radius);



// ------------------------- FUNCTIONS, SWITCH STATEMENTS, WHILE… DOWHILE LOOPS   ---------------------

 ///////////////////////////////// Assignment # 38-44


 /////// question 1.
// Write a custom function power ( a, b ), to calculate the value of
// a raised to b.


// function power(a, b) {
//     var result = 1;
//     for (var i = 0; i < b; i++) {
//         result *= a; 
//     }
//     return result;
// }

// var base = +prompt("Enter base/number", 2);  
// var exponent = +prompt("Enter exponent/power", 5); 
// var result = power(base, exponent);
// document.write(base + " raised to the power " + exponent + " is: " + result);

///////////////// question 2.
// Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …


// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; 
//     } else {
//         return false; 
//     }
// }

// var year = parseInt(prompt("Enter a year to check if it's a leap year:"));

// if (isLeapYear(year)) {
//     document.write(year + " is a leap year.");
// } else {
//     document.write(year + " is not a leap year.");
// }



///////////////// question 3.
// . If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function triangle (a, b, c) {
 
//         var s = (a + b + c) / 2;
//         var area = (s * (s - a) * (s - b) * (s - c));
//         return parseFloat(area);
//     }
    
//     var a = +prompt('Enter side a of triangle');
//     var b = +prompt('Enter side b of triangle');
//     var c = +prompt('Enter side c of triangle');
    
//     var area = triangle (a, b, c);
//     document.write("Area of the triangle: " + area);
    


/////////////////// question 4.
// Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.


// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {
//     var S = calculateSemiPerimeter(a, b, c); 
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c)); 
// }

// var a = parseFloat(prompt("Enter the length of side a:"));
// var b = parseFloat(prompt("Enter the length of side b:"));
// var c = parseFloat(prompt("Enter the length of side c:"));

// if (a + b > c && a + c > b && b + c > a) {
//     var area = calculateArea(a, b, c);
//     document.write("The area of the triangle is: " + area.toFixed(2));
// } else {
//     document.write("The given sides do not form a valid triangle.");
// }


//////////////////////// question 5.
// You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.



// function customIndexOf(str, char) {
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] === char) {
//             return i; 
//         }
//     }
// }


// var inputString = prompt("Enter a string:");
// var searchChar = prompt("Enter a character to find:");

// var result = customIndexOf(inputString, searchChar);

// if (result !== -1) {
//     document.write('The character '+ searchChar+' is found at index '+ result + 'in the string ' + inputString);
// } else {
//     document.write('The character '+ searchChar+' is not found in the string '+ inputString );
// }



//////////////////////// question 6.
// . Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// function removeVowels(sentence) {
//     if (sentence.length > 25) {
//         return "The sentence is too long. Please enter a sentence with 25 or fewer characters.";
//     }
//     return sentence.replace(/[aeiouAEIOU]/g, ""); 
// }

// var inputSentence = prompt("Enter a sentence (max 25 characters):");
// var result = removeVowels(inputSentence);

// document.write('Original Sentence:' + inputSentence +' <br> <br>');
// document.write('Sentence without vowels: ' + result);


//////////////////////// question 7.
// Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// FUNCTIONS, switch statements, while… do-while loops | JAVASCRIPT
// Page 2 of 2
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

// function countVowels(sentence) {
//     var count = 0; 
//     var vowels = "aeiouAEIOU";
//     var len = sentence.length; 

//     for (var i = 0; i <= len - 1; i++) {
    
//         var char1 = sentence[i];
//        var char2 = sentence[i + 1];

//         switch (true) {
//             case vowels.includes(char1) && vowels.includes(char2):
//                 count++; 
//                 break;
//         }
//     }

//     return count;
// }

// var inputSentence = prompt("Enter a sentence:");
// var result = countVowels(inputSentence);

// document.write('Sentence: '+ inputSentence + ' <br> <br>');
// document.write('Number of successive vowels: '+ result);


////////////////// question 8.
// The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.


// function convertToMeters(km) {
//     return km * 1000; 
// }

// function convertToFeet(km) {
//     return km * 3280.84; 
// }

// function convertToInches(km) {
//     return km * 39370.1; 
// }

// function convertToCentimeters(km) {
//     return km * 100000; 
// }

// function distanceConverter() {
//     var distanceKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//     if (isNaN(distanceKm) || distanceKm <= 0) {
//         alert("Please enter a valid positive number.");
//         return;
//     }

    
//     var meters = convertToMeters(distanceKm).toFixed(2);
//     var feet = convertToFeet(distanceKm).toFixed(2);
//     var inches = convertToInches(distanceKm).toFixed(2);
//     var centimeters = convertToCentimeters(distanceKm).toFixed(2);

 
//     document.write(`<h1>Distance Conversion</h1>`);
//     document.write('Distance in kilometers:' + distanceKm + 'km <br>');
//     document.write('Distance in meters: '+ meters +' m <br>');
//     document.write('Distance in feet: ' +feet+' ft <br>');
//     document.write('Distance in inches: '+ inches + 'in <br>');
//     document.write('Distance in centimeters: ' + centimeters + 'cm <br>');
// }


// distanceConverter();



////////////////////////// question 9.
// . Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.




//   function overtime(work) {
//     var hours = 40;
//     var overtimerate = 12.00;
//     var overpay = 0;

 
//     if (work > hours) {
//         var overtimeHours = work - hours;
//         overpay = overtimeHours * overtimerate;
//     }

//     return overpay;
// }


// var work = 60; 
// var overpay = overtime(work);
// document.write("Overtime Pay: RS." + overpay);


///////////// question 10.
// . A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.


// function withdraw (balance){
//     var amount = +prompt("Enter you Amount!")

// if(amount <= balance){
// totalbalance -= amount;

// alert(" widhdraw successful Remaning balance : " + totalbalance + " hunderd")

// }

// else{
//     alert(" invalid balance")
// }
//   }

// var totalbalance = 10000;
// withdraw(totalbalance);

