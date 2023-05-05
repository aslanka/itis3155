let result = document.getElementById("result");

function calculate(value) {
  if (value === "=") {
    result.value = eval(result.value);
  } else {
    if (result.value.slice(-1) === "." && value === ".") {
      return;
    }
    result.value += value;
  }
}

function clearResult() {
  result.value = "";
}

function deleteLastChar() {
  result.value = result.value.slice(0, -1);
}
