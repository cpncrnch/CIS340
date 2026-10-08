/*
Brian Brown, S00709110
Dr. Bhavana Bhardwaj
CIS 0340 Website Administration II
M, W 10:00 - 10:50 a.m.
Javascript Assignment: Q2, Part 2
Due Date: 10/12/26

Question 2, Part 2:
Write a script to provide the following output:
Output: The first 20 Fibonacci numbers, which are defined as in the sequence
1, 1, 2, 3, . . . where each number in the sequence after the second is the sum
of the two previous numbers. 
*/

// gives assignment header info to the assignment class
var assignmentInfo = document.querySelector(".assignmentInfo");

assignmentInfo.innerHTML = `
    Brian Brown, S00709110<br>
    Dr. Bhavana Bhardwaj<br>
    CIS 0340 Website Administration II<br>
    M, W 10:00 - 10:50 a.m.<br>
    Javascript Assignment: Q2, P1<br>
    Due Date: 10/12/26
`;

// first two Fibonacci numbers (ignoring 0)
var first = 1;
var second = 1;

// display the first two numbers
document.write(first + ", " + second);

// generate numbers 3 through 20
for (var count = 3; count <= 20; count++) {
    var next = first + second; // calculates next Fibonacci number
    document.write(", " + next); // displays a comma, space and the "next" number

    // shifts the numbers to be used for calculating the next number in the sequence 
    first = second;
    second = next;
}
