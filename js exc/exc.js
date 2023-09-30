// #1 Write a program to display alert with your name and class on next line.(use line break)
//        SOLUTION
// alert('Musarrat' +' '+ 'Batch = 10');
// #2 Declare a variable birthYear and assign your birthyear in this variable
// and alert the type of the variable like this 'type of birth year is number'
//        SOLUTION
//    var birthyear = 2023 ;
//    var age = +prompt('enter your age');
//    alert(birthyear - age);
// #3 Display in the browser  a. A heading stating “Rules for naming JS variables”
//        SOLUTION
//   b. Variable names can only contain  small letters, Camelcase,
//   c. _(under score) and $(dollar) .
//   d. For example $my_1stVariable.
//   e. Variables must begin with a $(dollar symbol) , _(underscore) or
//   f. small letters . For example $name, _name or name
//   g. Variable names are case CamelCase
//   h. Variable names should not be JS Start number , Special Charecter , blank space ,Start capital latter.
// #4 Write a program that returns your age in days. (take age as an input)?
//        SOLUTION
// var age = +prompt("enter your age");
// console.log(age * 365 +" "+"Days");
// # 5 Create a program that takes a number as an input, increments 
//        SOLUTION
// the number by +1 and returns the result. (take number as an input)
// var num1 = +prompt("enter 1st Value");
// var num2 = +prompt("enter 2nd Value");
// var result = num1++ + ++num2 + num2 + num1;
//  console.log (result);
// # 6 Create a program that takes a number as an input, decrements the number by -1 and returns the result.
//        SOLUTION
//    var num1 = 20;
//    var num2 = 25;
//    var result = num1 - --num2 + num2 - -num1;
//    console.log (result);
// # 7 Create a function that takes a number and return square of a number
//        SOLUTION
//  var num1 = +prompt("enter 1st Value");
//  var result = num1*num1;
// console.log (result);
// # 8 check if the entered number is a positive or a negative integer
//        SOLUTION
// var num1 = +prompt("Enter Number");
// if(num1>0){
// console.log(' Given Number is Positive');
// }
// else(num1<0){
//     console.log('Given Number is Negative');
// }
// # 9 Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to  convert the total currency to Pakistani Rupees.
//  Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 163 Pakistani
// Rupee and 1 Saudi Riyal = 43 Pakistani Rupee)
//        SOLUTION
// var dollar = 10*163;
// var riyal = 25*43;
// var result = dollar+riyal;
// console.log(result);

//# 10 What will be the output in variables a, b & result after execution of the following script: var a = 2, b = 1; 
//var result = --a - --b + ++b + b--;  Explain the output at each stage:  --a;  --a - --b;  --a - --b + ++b;  --a - --b + ++b + b--;  
//        SOLUTION
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);
//            1 -  0 +  1  + 1
// #11 Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
//“Welcome to city of lights” if enter lahore, display "welcome to historical city" if Quetta display message "welcome to cold city"
//        SOLUTION
//   var city = prompt("Enter city name");
//   if(city == 'Karachi'){
//     document.write('Welcome to city of lights');
//   }
//   else if (city == 'Lahore'){
//     document.write('Welcome to historical city');
//   }
//   else if (city == 'Quetta'){
//     document.write('Welcome to Cold city');
//   }
//   else{
//    document.write ('your city is not match')
//   }
//# 12 Write a program to create a calculator for +,-,*, / & % using if statements.  Take the following input: 
// a. First number b. Second number  c. Operation (+, -, *, /, %)    Compute & show the calculated result to user.
//        SOLUTION
// var a = +prompt('Enter First value');
// var b = +prompt('Enter 2nd value');
// var c = prompt('Enter Operator');
// if(c == "+"){
// document.write(a+b);
// }
// else if(c == "-"){
// document.write(a-b);
// }
// else if(c == "*"){
// document.write(a*b);
// }
// else if(c == "/"){
// document.write(a/b);
// }
// else if(c == "%"){
// document.write(a%b);
// }   
// else{
// document.write ('your operator is invalid');
// } 
// # 13 Write a program to take user salary as an input  if salary is less than 60000
// than print "you are a junior developer" if salary is higher or equal to than 60000 
//"You are a web developer"if higher equal to 100000 then print message "you are a software engineer"
//        SOLUTION
// var salary = +prompt('Enter Salary');
// if(salary < 60000){
// console.log("you are a junior developer");
// }
// else if(salary >= 60000 && salary < 100000){
// console.log("You are a web developer");
// }
// else if(salary >= 100000){
// console.log("you are a software engineer");
// }    

// else{
// document.write("Congratulations!!!");
// }
//# 14 Write a program that takes string and find exclaimation
// point in the string.(use charAt and indexOf)

