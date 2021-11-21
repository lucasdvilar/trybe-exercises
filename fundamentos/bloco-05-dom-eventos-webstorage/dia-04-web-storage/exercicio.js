function changeBackgroundColor() {
  let backgroundColorButton = document.getElementById("backgroundColorButton");

  backgroundColorButton.addEventListener("click", function() {
    let input = document.getElementById("input");

    document.body.style.backgroundColor = input.value;
    localStorage.setItem("backgroundColor", input.value);
  });
};

changeBackgroundColor();

function changeTextColor() {
  let textColorButton = document.getElementById("textColorButton");

  textColorButton.addEventListener("click", function() {
    let input = document.getElementById("input");

    document.body.style.color = input.value;
    localStorage.setItem("textColor", input.value);
  });
};

changeTextColor();

function changeFontSize() {
  let fontSizeButton = document.getElementById("fontSizeButton");

  fontSizeButton.addEventListener("click", function() {
    let input = document.getElementById("input");

    document.body.style.fontSize = input.value;
    localStorage.setItem("fontSize", input.value);
  });
};

changeFontSize();

function changeLineHeight() {
  let lineHeightButton = document.getElementById("lineHeightButton");

  lineHeightButton.addEventListener("click", function() {
    let input = document.getElementById("input");

    document.body.style.lineHeight = input.value;
    localStorage.setItem("lineHeight", input.value);
  });
};

changeLineHeight();

function changeFontFamily() {
  let fontFamilyButton = document.getElementById("fontFamilyButton");

  fontFamilyButton.addEventListener("click", function() {
    let input = document.getElementById("input");

    document.body.style.fontFamily = input.value;
    localStorage.setItem("fontFamily", input.value);
  });
};

changeFontFamily();

function keepChanges() {
  document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
  document.body.style.color = localStorage.getItem("textColor");
  document.body.style.fontSize = localStorage.getItem("fontSize");
  document.body.style.lineHeight = localStorage.getItem("lineHeight");
  document.body.style.fontFamily = localStorage.getItem("fontFamily");
};

window.onload = keepChanges;