/**
 * check odd or even number
 * @param {number} number
 * @returns {string}
 */
const checkOddEvenNumber = function (number) {
  number = prompt("enter a number:");
  if (number === "" || number === null || Number.isNaN(Number(number))) {
      return "It's not a number!Enter number!";
  }
  if (number % 2 === 0) {
      return "even";
  }
  return "odd";
};
console.log(checkOddEvenNumber());

/**
* compare values
* @param {any} value1
* @param {any} value2
* @returns  {any | null}
*/
const compareValue = function (value1, value2) {
  if (typeof value1 === typeof value2) {
      if (value1 > value2) {
          return value1;
      }
      if (value2 > value1) {
          return value2;
      }
      if (value1 === value2) {
          return null;
      }
  }
  return null;
};

console.log(compareValue("fds", "vfds"));
console.log(compareValue("", "vfds"));
console.log(compareValue(5, "vfds"));
console.log(compareValue(null, "vfds"));
console.log(compareValue(10, 5));
console.log(compareValue(undefined, NaN));