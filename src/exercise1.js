/*
// JavaScript Exercise
// Part 1
// E1:  Check two numbers, return true if one of them is 100
//      or if the sum is 100.
const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));

console.log(isEqualTo100(10, 0));
console.log(isEqualTo100(0, 10));

console.log(isEqualTo100(20, 80));
console.log(isEqualTo100(50, 50));

// E1 modified: Check if one of the numbers is 0 or the sum is 0.
const isEqualTo0 = (a, b) => a * b === 0 || a + b === 0;

console.log(isEqualTo0(0, 1));
console.log(isEqualTo0(100, 99));
console.log(isEqualTo0(0, 0));
console.log(isEqualTo0(5, -5));

// E2:  Get the extension of a filename.
const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));

// E2 mod:  Get filename without the extension.
const getFileName = (str) => str.slice(0, str.lastIndexOf("."));
console.log(getFileName("index.html"));
console.log(getFileName("webpack.config.js"));

// E3:  Replace every character of a string with the next alphabet.
const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log(moveCharsForward("abc"));
console.log(moveCharsForward("z"));

// E3 mod:  Replace every other character of a string with the
//          previous alphabet.
function moveCharsBackward(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
  }
  arr = arr.join("");
  return arr;
}

const moveCharsBackward = (str) => {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i += 2) {
    arr[i] = String.fromCharCode(arr[i].charCodeAt(0) - 1);
  }
  return arr.join("");
};

console.log(moveCharsBackward("abcdef"));
console.log(moveCharsBackward("z"));

// E4:  Get the current system date.
const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

//console.log(formatDate());

// E4 mod:  Get the current system time.
const formatTime = (d = new Date()) => {
  const seconds = d.getSeconds();
  const minutes = d.getMinutes();
  const hours = d.getHours();
  return `${hours}'o clock, ${minutes} minutes, ${seconds} seconds`;
};

console.log(formatTime() + " on " + formatDate());

// E5:  Add "New!" in front of a given string. If already exists,
//      return the original string.
const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log(addNew("New! Offers"));
console.log(addNew("and Hot! Offers"));

// E5 mod:  Add "Brand" if string starts with "New!". Return original
//          if already exists, else add "Brand New!".
const addBrandNew = (str) =>
  str.indexOf("Brand New!") === 0 ? str : `Brand ${addNew(str)}`;

console.log(addBrandNew("New! Offers"));
console.log(addBrandNew("and Hot! Offers"));

/////////////////////////////////////////////////////////////////
// Part 2
// E1:  Add first 3 and last 3 characters of a string. If the
//      string length is less than 3, return the original string.
const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(makeNewString("abc"));
console.log(makeNewString("abcdef"));
console.log(makeNewString("abc123abc123"));

console.log(makeNewString("ab"));

// E1 mod:  Switch the position of first half and the other half
//          of a string. If the string length is not an even number,
//          return the original string.
const switchString = (str) => {
  const half = str.length / 2;
  return !Number.isInteger(half)
    ? str
    : str.slice(-1 * half) + str.slice(0, half);
};

console.log(switchString("abcdef"));
console.log(switchString("ab"));
console.log(switchString("12345"));

// E2:  Extract the first half of a string of even length.
const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf("temp"));
console.log(firstHalf("temple"));
console.log(firstHalf("temples"));

// E2 mod:  See E1 mod.

// E3:  Concatenate two strings with the first characters removed.
const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(concatenate("abc", "def"));
console.log(concatenate("Junior", "Developer"));

// E3 mod:  Concatenate two strings with the last characters removed.
const concatenate2 = (str1, str2) => str1.slice(0, -1) + str2.slice(0, -1);

console.log(concatenate2("abc", "def"));
console.log(concatenate2("Junior", "Developer"));

// E4:  Find which one of two values (less than 100) is nearer to 100.
const closeTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log(closeTo100(99, 1));
console.log(closeTo100(49, 51));
console.log(closeTo100(50, 50));

// E4 mod:  Find which one of two values is nearer to 100.
const absCloseTo100 = (a, b) => (Math.abs(100 - a) < Math.abs(100 - b) ? a : b);

console.log(absCloseTo100(99, 102));
console.log(absCloseTo100(49, 50));
console.log(absCloseTo100(50, 150));

// E5:  Check a given string contains 2 to 4 occurrences of a specific character.
const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4("ooh!", "o"));
console.log(contains2To4("oh!", "o"));
console.log(contains2To4("oooh!", "o"));
console.log(contains2To4("ooooh!", "o"));
console.log(contains2To4("oooooh!", "o"));

// E5 mod:  Check a given string contains 2 to 4 occurrences and return the first
//          position the occurrence happens.
const occurPointer = (str, char) =>
  contains2To4(str, char)
    ? str.indexOf(char) + 1
    : "no specified occurrences found";

console.log(occurPointer("Pooh!", "o"));
console.log(occurPointer("Woh!", "o"));
console.log(occurPointer("oooh!", "o"));
console.log(occurPointer("Noooo!", "o"));
console.log(occurPointer("Whooooo!?", "o"));

/////////////////////////////////////////////////////////////////
// Part 3
// E1:  Find the number of even numbers in an array of integers.
const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(countEvenNumbers([2, 2, 2, 2, 2, 2]));
console.log(countEvenNumbers([3, 5, 7, 9, 10, 100]));

// E1 mod:  Find the number of odd numbers in an array.
const countOddNumbers = (arr) => arr.filter((num) => num % 2 !== 0).length;

console.log(countOddNumbers([1, 3, 5, 7, 9, 11]));
console.log(countOddNumbers([2, -2, 2, -2, 2, -2]));
console.log(countOddNumbers([3, 5, 7, 9, 10, 100]));

// E2:  Find the number of even numbers up to a given number.
const countEvenNumbers = (arr) => arr.filter((num) => num % 2 === 0).length;

const createArrayOfNumbers = (num) => {
  const returnArray = [];
  for (let i = 1; i <= num; i += 1) {
    returnArray.push(i);
  }
  return returnArray;
};

console.log(countEvenNumbers(createArrayOfNumbers(6)));
console.log(countEvenNumbers(createArrayOfNumbers(9)));

// E2 mod:  Add all the even numbers up to a given number.
const evenNumberArray = (num) =>
  createArrayOfNumbers(num).filter((num) => num % 2 === 0);

const sumOfArray = (arr) => arr.reduce((a, b) => a + b);

console.log(sumOfArray(evenNumberArray(6)));
console.log(sumOfArray(evenNumberArray(9)));

// E3:  Check whether a given array of integers is sorted in ascending order.
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
};

console.log(isAscending([1, 2, 3, 4, 5, 6]));
console.log(isAscending([1, 2, 5, 4, 3, 6]));
console.log(isAscending([1, 2, 3, 4, 5, 5]));

// E3 mod:  Check whether an array of integers is in descending order.
const isDescending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] > arr[i]) return false;
  }
  return true;
};

console.log(isDescending([1, 2, 3, 4, 5, 6]));
console.log(isDescending([6, 5, 4, 3, 2, 1]));
console.log(isDescending([6, 5, 4, 5, 4, 5]));

// E4:  Get the largest even number from an array of integers.
const largestEven = (arr) => Math.max(...arr.filter((num) => num % 2 === 0));

console.log(largestEven([1, 2, 3, 4, 5, 6]));
console.log(largestEven([1, 2, 33, 4, 5, 6]));
console.log(largestEven([1, 2, 3, 44, 55, 6]));

// E4 mod:  Get the smallest odd number from an array of integers.
const smallestOdd = (arr) => Math.min(...arr.filter((num) => num % 2 !== 0));

console.log(smallestOdd([1, 2, 3, 4, 5, 6]));
console.log(smallestOdd([11, 2, 33, 4, 5, 6]));
console.log(smallestOdd([-1, 2, 3, 44, 55, 6]));

// E5:  Replace first digit in a string with $ character.
const replaceFirstDigit = (str) => str.replace(/[0-9]/, "$");

console.log(replaceFirstDigit("Abcd1Abcde"));
console.log(replaceFirstDigit("A123Abcde"));
console.log(replaceFirstDigit("A1cd1Abcd1"));

// E5 mod:  Same as E5. Self-made.
const replaceToDollar = (str) => {
  arr = str.split("");
  for (let i = 0; i < arr.length; i += 1) {
    if (!isNaN(arr[i])) {
      arr[i] = "$";
      break;
    }
  }

  return arr.join("");
};

console.log(replaceToDollar("1dollarsign"));
console.log(replaceToDollar("dollar1sign"));

/////////////////////////////////////////////////////////////////
// Part 4
// E1:  Report if a given year is a leap year.
const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2000));
console.log(isLeapYear(2001));
console.log(isLeapYear(2002));
console.log(isLeapYear(2003));
console.log(isLeapYear(2004));
console.log(isLeapYear(2999));

// E1 mod:  Count number of days of a given year. *** NEED HELP *** INFINITE LOOP ***
// const countDays = (year) => {
//   let i = 1;
//   date = new Date(year, 0, i);
//   while (date.getFullYear() === year) {
//     i++;
//   }
//   return i;
// };

// console.log(countDays(2022));

// E1 mod:  Check if given year is a leap year by checking if Feb/29 exists.
const isLeapYear2 = (year) => {
  date = new Date(year, 1, 29);
  return date.getMonth() === 1;
};

console.log(isLeapYear2(2012));
console.log(isLeapYear2(2013));
console.log(isLeapYear2(2014));
console.log(isLeapYear2(2015));
console.log(isLeapYear2(2016));

// E2:  Compare two objects to determine if the first one contains the same
//      properties as the second one.
const objA = { a: 1, b: 2, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const objectsEqual = (a, b) => Object.keys(a).every((key) => b[key]);

console.log(objectsEqual(objA, objB));
console.log(objectsEqual(objA, objC));
console.log(objectsEqual(objB, objC));

// E2 mod:  need more objects practice

// E3:  Convert a comma-separated values (CSV) string to a 2D array.
const parseCSV = (csvString) =>
  csvString.split("\n").map((row) => row.split(","));

const str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`;

console.log(parseCSV(str));

// E3 mod:  Remove commas from a CSV string and create a 2D array.
const parseCSV2 = (csvString) =>
  csvString.split("\n").map((row) =>
    row
      .split("")
      .filter((char) => char != ",")
      .join("")
  );

console.log(parseCSV2(str));

// E4:  Generate a random hexadecimal color code.
const getRandomHexNumber = () => Math.floor(Math.random() * 16).toString(16);

const getRandomHexColor = () =>
  "#" + Array.from({ length: 6 }).map(getRandomHexNumber).join("");

console.log(getRandomHexColor());
console.log(getRandomHexColor());
console.log(getRandomHexColor());

// E4 mod:  Generate a 3-digit random octal literal.
const getRandomOctNumber = () => Math.floor(Math.random() * 8).toString(8);

const getRandomOctLit = () =>
  "0o" + Array.from({ length: 3 }).map(getRandomOctNumber).join("");

console.log(getRandomOctLit());
console.log(getRandomOctLit());
console.log(getRandomOctLit());

// E5:  Return true if the provided predicate function returns true for all elements,
//      false otherwise.
const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
};

console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 0));
console.log(isEveryElem([1, 2, 3, 4, 5], (x) => x > 3));

// E5 mod:  Same as E5. Return which array does not satisfy the condition.
const isEveryElem2 = (arr, fn) => {
  let TorF = true;
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i])) {
      console.log(
        `Number in position ${i + 1} does not satisfy the condition.`
      );
      TorF = false;
    }
  }
  return TorF;
};

console.log(isEveryElem2([1, 2, 3, 4, 5], (x) => x > 0));
console.log(isEveryElem2([1, 2, 3, 4, 5], (x) => x > 3));

/////////////////////////////////////////////////////////////////
// Part 5
// E1:  Return a passed string with letters in alphabetical order.
const alphabeticalOrder = (str) =>
  str
    .split("")
    .sort((a, b) => (a > b ? 1 : -1))
    .join("");

console.log(alphabeticalOrder("webmaster"));
console.log(alphabeticalOrder("javascript"));

// E1 mod: Return a passed string in reverse alphabetical order.
const reverseAOrder = (str) =>
  str
    .split("")
    .sort((a, b) => (a < b ? 1 : -1))
    .join("");

console.log(reverseAOrder("webmaster"));
console.log(reverseAOrder("javascript"));

// E2:  Count the number of vowels or a specific letter in a given string.
const countLetters = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.split("").filter((s) => letters.indexOf(s) > -1).length;

console.log(countLetters("abcde"));
console.log(countLetters("abcde", ["c"]));

// E2 mod:  Count the number of consonants
const countLetters2 = (str, letters = ["a", "e", "i", "o", "u"]) =>
  str.length - str.split("").filter((s) => letters.indexOf(s) > -1).length;

console.log(countLetters2("abcde"));

// E3:  Convert an amount to coins.
const countCoins = (money, coins = [25, 10, 5, 2, 1]) => {
  const totalCoins = [];
  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(money / coins[i]);
    for (let y = 0; y < thisCoinNum; y += 1) {
      totalCoins.push(coins[i]);
    }
    money -= coins[i] * thisCoinNum;
  }
  return totalCoins;
};

console.log(countCoins(46));

// E3 mod:  exercise too unique.

// E4:  Extract unique characters from a string.
const getUniqueChars = (str) =>
  str
    .split("")
    .filter((item, index, arr) => arr.slice(index + 1).indexOf(item) === -1);

console.log(getUniqueChars("aaaabbbccc"));

// E4 mod:  Same as E4.
const getUniqueChars2 = (str) => [...new Set(str.split(""))];

console.log(getUniqueChars2("aaaabbbccc"));

// E5:  Find the first not-repeated character from a string.
const getNonRepeatedChars = (str) =>
  str
    .split("")
    .filter(
      (item, index, arr) =>
        arr.filter((arrItem) => arrItem === item).length === 1
    );

console.log(getNonRepeatedChars("abacddbec"));

// E5 mod:  Same as E5.
const getNonRepeatedChars2 = (str) => {
  let uniqueString = [...new Set(str.split(""))];
  str.split("").filter(uniqueString).join("");
};

console.log(getNonRepeatedChars("abacddbec"));
console.log(getNonRepeatedChars("abcdef"));
*/
