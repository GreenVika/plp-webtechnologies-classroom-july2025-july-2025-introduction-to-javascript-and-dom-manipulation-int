// PART 1: Variables & Conditionals

let userName = "Student"; // variable declaration
let isAdult;

// Event: Check age when button is clicked
document.getElementById("checkAgeBtn").addEventListener("click", function () {
  let age = document.getElementById("ageInput").value;

  if (age >= 18) {
    isAdult = true;
    document.getElementById("userStatus").textContent = userName + " is an adult.";
  } else {
    isAdult = false;
    document.getElementById("userStatus").textContent = userName + " is a minor.";
  }
  console.log("Age check completed: " + isAdult);
});

// PART 2: Functions

// Function 1: Square a number
function square(num) {
  return num * num;
}

// Function 2: Format greeting
function greet(name) {
  return "Welcome, " + name + "!";
}

// Event: Use square function
document.getElementById("squareBtn").addEventListener("click", function () {
  let num = document.getElementById("numInput").value;
  document.getElementById("squareResult").textContent = "Square: " + square(num);
});

// Console demo
console.log(greet(userName));

// PART 3: Loops

// Example 1: For loop → Generate list items
document.getElementById("generateListBtn").addEventListener("click", function () {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear previous list
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = " " + i;
    list.appendChild(li);
  }
});

// Example 2: While loop → Countdown in console
let countdown = 5;
while (countdown > 0) {
  console.log("Countdown: " + countdown);
  countdown--;
}

// PART 4: DOM Manipulation

// 1. Change text content on button click
document.getElementById("changeGreetingBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = "Greeting changed!";
});

// 2. Change CSS style dynamically
document.getElementById("greeting").style.color = "green";

// 3. Toggle background color on click
document.getElementById("greeting").addEventListener("click", function () {
  this.style.backgroundColor =
    this.style.backgroundColor === "yellow" ? "transparent" : "yellow";
});
