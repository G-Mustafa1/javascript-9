// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentName1 = new Array()

// 3. Declare and initialize a strings array.
let stringsArray = ["Apple", "Mango", "Banana"];

// 4. Declare and initialize a numbers array.
let numbersArray = [10, 20, 30];

// 5. Declare and initialize a boolean array.
let boolArray = [true, false];

// 6. Declare and initialize a mixed array.
let mixedArray = []
mixedArray[0] = "Apple"
mixedArray[1] = "Mango"
mixedArray[2] = "Banana"

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
let qualifications = [
   "<h2> Qualifications : </h2>",
   "1)SSC",
   "2)HSC",
   "3)BSC",
   "4)BS",
   "5)BCOM",
   "6)MS",
   "7)M.Phil",
   "8)PhD",
   "<hr>"
];
for (let i = 0; i < qualifications.length; i++) {
   document.write(`<br> ${qualifications[i]} <br>`);

}
// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
let studentNama = ["Michale", "Jonh", "Tony"];
let scores = [320., 230., 480.];
for (let i = 0; i < studentNama.length; i++) {
   for (let j = 0; j < scores.length; j++) {
   }
   let percentages = (scores[i] / 500 * 100 + "%");
   document.write(`Score of ${studentNama[i]} is ${scores[i]} . Percentages:  ${percentages}  <br/> `)
}
//9. Initialize an array with color names. Display the array
//elements in your browser.

document.write(`<br> <hr> <br> <h2> Colors </h2>`);

let colorNam = ["Red", "Green", "Blue"];
document.write(` ${colorNam} `);
let startAddcolor = prompt("Enter a color to add the start" , "Blue");
document.write(`<h2> Color to add the start : ${startAddcolor} </h2>`);

colorNam.unshift(startAddcolor);
document.write(`${colorNam}`)

let endAddcolor = prompt("Enter a color to add the start" , "Black");
document.write(`<h2> Color to add the end : ${endAddcolor} </h2>`);

colorNam.push(endAddcolor);
document.write(`${colorNam}`)

//c. Add two more color to the beginning of the array.
//Display the updated array in your browser.

document.write(`<h2>Add two more color to the beginning of the array.</h2>`);
colorNam.unshift("white","yellow");
document.write(`${colorNam}`)

//d. Delete the first color in the array. Display the updated
//array in your browser.
document.write(`<h2> Delete the first color </h2>`)
// let delfstColor = prompt(`Delete the first color`)
colorNam.shift()
document.write(`${colorNam}`)

//e. Delete the last color in the array. Display the updated
//array in your browser.

document.write(`<h2> Delete the last color </h2>`)
colorNam.pop()
document.write(`${colorNam}`)

//f. Ask the user at which index he/she wants to add a color
//& color name. Then add the color to desired
//position/index. . Display the updated array in your
//browser.

document.write(`<br/><h2> add a color & color name. </h2>`);
let index = +prompt("Enter the index where you want to add a color:");
let color = prompt("Enter the color name:");
colorNam.splice(index, 0, color);
document.write(`${colorNam}`);

//g. Ask the user at which index he/she wants to delete
//color(s) & how many colors he/she wants to delete. Then
//remove the same number of color(s) from user-defined
//position/index. . Display the updated array in your
//browser.

document.write(`<br/><h2>Delete colors from the array.</h2>`);
let deleteIndex = +prompt(
  "Enter the index from which you want to start deleting colors:"
);
let numColorsToDelete = +prompt(
  "Enter the number of colors you want to delete:"
);
colorNam.splice(deleteIndex, numColorsToDelete);
document.write(`${colorNam} `);

//10. Write a program to store student scores in an array &
//sort the array in ascending order using Array’s sort
//method.

let studentScores = [85, 92, 78, 95, 88, 76, 98, 81, 90, 89];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

document.write(" <hr> <h2> Student scores in ascending order: </h2> ");
document.write(studentScores);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

let cityName = ["Karachi","Islamabad","Lahore","Quetta","Peshawar"]
let selectedCities = []
for (let i = 0; i < 3 ; i++) {
  selectedCities.push(cityName[i])
  
}
document.write(`<br/><hr/><h1>Selected Cities</h1>`);
document.write(
  `<br/>The selected cities are: ${selectedCities}<br/>`
);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

let array = ["Thus","is","my","cat"];
document.write(`<hr> <br> <h2> ARRAY </h2> ${array}<br>`);
let strings1 = array.join(" ");
document.write(`<h2> Strings </h2> ${strings1} `)

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let fifoAarry = [];
fifoAarry.push("Mango");
fifoAarry.push("Apple");
fifoAarry.push("Orange");

document.write(`<hr> <br> <h2> Fifo Aarray </h2>`);
document.write(`1: ${fifoAarry[0]}`);
document.write(` 2: ${fifoAarry[1]}`);
document.write(` 3: ${fifoAarry[2]} <br>`);

document.write(`<br> <h2> Removes the fist valu </h2> `)
fifoAarry.shift();
document.write(`<br> Remove first value ${fifoAarry} <br>`);
fifoAarry.shift();
document.write(`<br> Remove Second value ${fifoAarry} <br>`);
fifoAarry.shift();
document.write(`<br> Remove Third value ${fifoAarry} <br>`);

let removeLst = []
removeLst.push("Mango");
removeLst.push("Apple");
removeLst.push("Orange");

document.write(`<hr> <br> <h2> Fifo Aarray </h2>`);
document.write(`1: ${removeLst[0]}`);
document.write(` 2: ${removeLst[1]}`);
document.write(` 3: ${removeLst[2]} <br>`);

document.write(`<br> <h2> Removes the last valu </h2> `)
removeLst.pop();
document.write(`<br> Remove third value ${removeLst} <br>`);
removeLst.pop();
document.write(`<br> Remove Second value ${removeLst} <br>`);
removeLst.pop();
document.write(`<br> Remove first value ${removeLst} <br>`);

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write(`<br/><hr/><h1>Phone Manufacturers</h1></br>`);
document.write(`<br/><select name="phoneManufacturers">`);

for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(`<option value="${phoneManufacturers[i]}"> ${phoneManufacturers[i]}</option>`)  
}
document.write(`</select>`)

