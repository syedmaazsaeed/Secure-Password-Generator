const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePassword(password);
  }

  passBox.innerText = truncateString(password, totalChar.value);
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}

const copyToClipboard = () => {
  const passwordText = document.getElementById("pass-box").innerText;

  const textarea = document.createElement("textarea");
  textarea.value = passwordText;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);

  alert("Your 🗝️ has been copied!");
};

document.getElementById("copy-btn").addEventListener("click", copyToClipboard);

// Function to change the body background color
function changeBackgroundColor() {
  const colors = ["#121941", "#1a531b", "#501f7a", "#8b0000", "#bf00ff"]; // Add more colors as desired
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Function to auto change the background color every 3 seconds
function autoChangeBackgroundColor() {
  changeBackgroundColor();
  setInterval(changeBackgroundColor, 3000); // 3000ms = 3 seconds
}

// Call the function to start the auto color change
autoChangeBackgroundColor();
