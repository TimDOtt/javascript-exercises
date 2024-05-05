const fibonacci = function (number) {
  a = 1;
  b = 0;

  if (typeof number === "string") {
    number = Number(number);
  }
  if (number === 0) {
    a = number;
  } else if (number < 0) {
    a = "OOPS";
  }
  for (i = 1; i < number; i++) {
    a = a + b;
    b = a - b;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
