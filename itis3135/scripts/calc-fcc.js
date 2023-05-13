const buttons = document.querySelectorAll(".buttons button");
const result = document.getElementById("calcresult");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    switch (value) {
      case "AC":
        result.value = "";
        break;
      case "Del":
        result.value = result.value.slice(0, -1);
        break;
      case "=":
        try {
          result.value = eval(result.value);
        } catch (error) {
          result.value = "Error";
        }
        break;
      default:
        result.value += value;
        break;
    }
  });
});
