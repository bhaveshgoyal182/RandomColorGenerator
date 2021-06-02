const body = document.querySelector("body");
var input = document.getElementById("color-input");
var generateBtn = document.querySelector(".generate");
var clearBtn = document.querySelector(".clear");
var clipboardBtn = document.querySelector(".clipboard");
var clipAlert = document.querySelector(".clip-alert");

//setting the changing background of the site
setInterval(() => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}, 1000);

//generating random colors acc to user
const randomColors = (sizeOfArray) => {
  colors = [];
  for (let i = 1; i <= sizeOfArray; i++) {
    var red = Math.floor(Math.random() * 9);
    var green = Math.floor(Math.random() * 9);
    var blue = Math.floor(Math.random() * 9);
    color = `#${red}${green}${blue}${green}${red}${blue}`;
    colors.push(color);
  }
  return colors;
};

//handling the button events
generateBtn.addEventListener("click", () => {
  input.value = randomColors(input.value);
});

clearBtn.addEventListener("click", () => {
  input.value = "";
});

//handling the clipboard copy feature
clipboardBtn.addEventListener("click", () => {
  input.select();
  document.execCommand("copy");
  clipAlert.innerHTML = "Copied to Clipboard!";
  clipAlert.style.padding = "2%";
  setTimeout(() => {
    clipAlert.innerHTML = "";
    clipAlert.style.padding = "0";
  }, 1000);
});
