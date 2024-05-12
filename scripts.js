const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  result.innerText = dividend / divider;

  // Convert inputs to numbers
  const dividendNum = parseFloat(dividend);
  const dividerNum = parseFloat(divider);

  // Perform division
  const divisionResult = dividendNum / dividerNum;

  // Scenario: Dividing numbers result in a decimal number
  if (!Number.isInteger(divisionResult)) {
    result.innerText = Math.floor(divisionResult);
  } else {
    result.innerText = divisionResult;
  }

  // Scenario: Validation when values are missing
  if (!dividend || !divider) {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again";
    return; // Exit the function early
  }

  // Scenario: An invalid division should log an error in the console
  if (dividerNum === 0) {
    result.innerText =
      "Division not performed. Invalid number provided. Try again";
    console.error("Division by zero error.");
    return; // Exit the function early
  }

  // Scenario: Providing anything that is not a number should crash the program
  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Please enter valid numbers.");
    return; // Exit the function early
  }
});
