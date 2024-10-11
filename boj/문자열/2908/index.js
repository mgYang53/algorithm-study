const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const [a, b] = input.split(" ");

const reverseStrToNum = (str) => Number(str.split("").reverse().join(""));

console.log(Math.max(reverseStrToNum(a), reverseStrToNum(b)));
