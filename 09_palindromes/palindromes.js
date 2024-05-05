const palindromes = function (str) {
  let lowerCase = str
    .toLowerCase()
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, "");

  let reverseString = lowerCase.split("").reverse().join("");

  if (reverseString === lowerCase) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
