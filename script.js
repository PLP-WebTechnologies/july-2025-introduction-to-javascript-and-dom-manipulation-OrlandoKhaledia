// ============================
// Variables & Conditionals
// ============================

function greetUser() {
  let name = document.getElementById("userName").value; // user input
  let greeting = "";

  if (name) {
    greeting = "Greetings, " + name + "!!! Welcome";
  } else {
    greeting = "Please enter your name";
  }

  document.getElementById("greeting").textContent = greeting;
  console.log(greeting);
}

// ============================
// Functions
// ============================

// Custom reusable function
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalOutput").textContent = 
    `The total of ${a} + ${b} is: ${total}`;
  console.log("Total calculated:", total);
  return total;
}

// Another reusable function
function formatString(str) {
  return str.trim().toUpperCase();
}

// ============================
// Loops
// ============================

function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old countdown

  for (let i = 10; i >= 5; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  
  // Example with while loop
  let i = 0;
  while (i < 4) {
    console.log("While loop count:", i);
    i++;
  }
}

// ============================
// DOM Manipulation
// ============================

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  let message = document.getElementById("domMessage");

  if (document.body.classList.contains("dark-mode")) {
    message.textContent = "Dark mode is ON ";
  } else {
    message.textContent = "Light mode is ON ";
  }
}
