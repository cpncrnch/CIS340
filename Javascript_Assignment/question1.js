
/*
Brian Brown, S00709110
Dr. Bhavana Bhardwaj
CIS 0340 Website Administration II
M, W 10:00 - 10:50 a.m.
Javascript Assignment: Q1
Due Date: 10/12/26

Develop a script that will determine the gross pay for each of the three employees.
The company pays “straight time” for the first 40 hours worked by each employee and
pays “time and a half” for all hours worked in excess of 40 hours.
You’re given a list of the employees of the company, the number of hours each employee
worked last week, and the hourly rate of each employee.
Your script should input this information for each employee, determine the employee’s
gross pay, and output HTML5 text that displays the employee’s gross pay. Use prompt
dialogs to input the data. (20 Points)
*/

// gives assignment header info to the assignment class
var assignmentInfo = document.querySelector(".assignmentInfo");

assignmentInfo.innerHTML = `
    Brian Brown, S00709110<br>
    Dr. Bhavana Bhardwaj<br>
    CIS 0340 Website Administration II<br>
    M, W 10:00 - 10:50 a.m.<br>
    Javascript Assignment: Q1<br>
    Due Date: 10/12/26
`;

// ask for three employees and calculate their gross pay
var employees = []; // create an employee array

// gathers and fills employees array
for (var i = 0; i < 3; i++) {
    var employee = {
        name: prompt("Enter employee name:"),
        hours: Number(prompt("Enter hours worked:")),
        rate: Number(prompt("Enter hourly rate:"))
    };

    // debugging info
    console.log(employee.name)
    console.log(employee.hours)
    console.log(employee.rate)

    employees.push(employee); // adds new employee to end of array
}

// loops through array to calculate pay & display
for (var i = 0; i < employees.length; i++) {
    var employee = employees[i];
    var otHours = 0
    var otPay = 0.00
    var grossPay = 0.00

    // calculates pvertime pay using employee.hours and employee.rate
    if (employee.hours > 40) {
        otHours = employee.hours - 40 
        otPay = otHours * (employee.rate * 1.5) // time and a half
    }

    // calculates regular hour pay
    grossPay = ((employee.hours - otHours) * employee.rate) + otPay

    // display employee name, hours, rate and gross pay
    document.write(
        employee.name + ": Hours: " + employee.hours + ", Rate: $" + 
        employee.rate.toFixed(2) + ", Gross pay: $" + grossPay.toFixed(2) + "<br>");
}



