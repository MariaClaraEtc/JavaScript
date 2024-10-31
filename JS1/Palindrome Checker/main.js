const input = document.getElementById("input");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
const value = input.value;
const reverse = reverseString(value);

if (value === "") {
  alert("Type. Something. Please. :)");
} else if (value === reverse) {
  alert("Palindrome!");
} else if (value === "duh") {
  alert("Very funny.");
} else {
  alert("Nope.");
}
  input.value = "";
}
