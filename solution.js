var romanToInt = function (s) {
  let roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let len = s.length;
  let convArray = s.split("");
  let number = 0;
  let currentValue;
  let nextValue;
  for (let i = 0; i < len; i++) {
    currentValue = roman[convArray[i]];
    nextValue = roman[convArray[i + 1]];
    if (currentValue < nextValue) {
      number -= roman[convArray[i]];
    } else {
      number += currentValue;
    }
  }
  console.log(number);
};
romanToInt("MCMXCIV");
