/*
Brian Brown, S00709110
Dr. Bhavana Bhardwaj
CIS 0340 Website Administration II
M, W 10:00 - 10:50 a.m.
Javascript Assignment: Q2, Part 1
Due Date: 10/12/26

Question 2, Part 1:
Write a script to provide the following output:
Output: A table of the numbers from 5 to 15 and their squares and cubes, using alert.
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

// alert table header
var table = "Number | Square | Cube\n";

// calculates square and cube for each number
for (var number = 5; number <= 15; number++) {
    var square = number * number;
    var cube = number * number * number;

    // builds alert table using vert bar as spacer between each number
    // I had a tab (\t) but alert shows weird character
    table += number + " | " + square + " | " + cube + "\n";
}

alert(table);


