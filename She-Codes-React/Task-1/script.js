const display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1) {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculateResult() {
  try {
    const result = eval(display.innerText);

    if (result === Infinity || result === -Infinity) {
      throw new Error("Division by zero");
    }

    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}
