// F TO C Calculator

// Event listener
document.getElementById("ConBtn").addEventListener("click", covertFahr);
var fahrInEl = document.getElementById("fahr-in");

// Event function
function covertFahr() {
  // Input
  var fahrNum = +document.getElementById("fahr-in").value;
  var output = document.getElementById("span");
  var clear = fahrInEl.value;

  // Process
  let conversion = (fahrNum - 32) * (5 / 9);
  conversion = conversion.toFixed(1);
  fahrInEl.value = ""; // this clears the input

  // Output
  output.innerHTML = conversion;
  fahrInEl.innerHTML = clear;
}
