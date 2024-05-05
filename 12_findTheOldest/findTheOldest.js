const findTheOldest = function (array) {
  return array.reduce((last, current) => {
    const oldAge = getAge(last.yearOfBirth, last.yearOfDeath);
    const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

    return oldAge < currentAge ? current : last;
  });

  function getAge(birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    return death - birth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
