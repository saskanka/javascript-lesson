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
