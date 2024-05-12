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
});
