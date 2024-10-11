const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const arr = input[1].split("").map(Number);

console.log(arr.reduce((a, b) => a + b));
