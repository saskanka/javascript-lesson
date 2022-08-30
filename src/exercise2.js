/* old copy
// e1

const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log("equal to 100 function test");

console.log(isEqualTo100(100, 0));
console.log(isEqualTo100(0, 100));

console.log(isEqualTo100(50, 50));
console.log(isEqualTo100(49, 51));

console.log(isEqualTo100(0, 0));
console.log(isEqualTo100(100, 100));

// e2

const getFileExtension = (str) => str.slice(str.lastIndexOf("."));

console.log("get file extension test");

console.log(getFileExtension("index.html"));
console.log(getFileExtension("webpack.config.js"));
console.log(getFileExtension("noname"));

// e3

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

console.log("move alphabet to right test");

console.log(moveCharsForward("abcd"));
console.log(moveCharsForward("z"));

// e4

const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};

console.log("show date test");

console.log(formatDate());

// e5

const addNew = (str) => (str.indexOf("New!") === 0 ? str : `New! ${str}`);

console.log("find New! and add New! test");

console.log(addNew("New! Offers"));
console.log(addNew("and Hot! Offers"));

// e1

const makeNewString = (str) =>
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log("combine first and last 3 characters test");

console.log(makeNewString("abc"));
console.log(makeNewString("abcdef"));
console.log(makeNewString("abc123def456"));

console.log(makeNewString("ab"));

// e2

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log("get first half of the string test");

console.log(firstHalf("temp"));
console.log(firstHalf("temporary"));
console.log(firstHalf("temporar"));

// e3

const concatenate = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log("concatenate two strings test");

console.log(concatenate("abc", "def"));
console.log(concatenate("Javascript", "isfun"));

// e4

const closestTo100 = (a, b) => (100 - a < 100 - b ? a : b);

console.log("find value closer to 100 test");

console.log(closestTo100(99, 1));
console.log(closestTo100(50, 51));
console.log(closestTo100(1, 1));

// e5

const countChars = (str, char) =>
  str.split("").filter((ch) => ch === char).length;

const contains2To4 = (str, char) =>
  countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log("find occurrencies test");

console.log(contains2To4("google", "o"));
console.log(contains2To4("goooogle", "o"));
console.log(contains2To4("gogle", "o"));
console.log(contains2To4("gooooogle", "o"));
*/
