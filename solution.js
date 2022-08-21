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
  
};
romanToInt("MCMXCIV");
