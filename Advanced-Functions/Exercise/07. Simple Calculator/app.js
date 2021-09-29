function calculator() {
  let num1 = document.querySelector("#num1");
  let num2 = document.querySelector("#num2");
  let result = document.querySelector("#result");

  let calculate = {
    add() {
      let addResult = Number(num1.value) + Number(num2.value);
      result.value = addResult;
      resetNumberValues();
    },
    subtract() {
      let subtractResult = Number(num1.value) - Number(num2.value);
      result.value = subtractResult;
      resetNumberValues();
    },
    init() {},
  };

  function resetNumberValues() {
    num1.value = "";
    num2.value = "";
  }

  return calculate;
}

const calculate = calculator();
// calculate.init("#num1", "#num2", "#result");
