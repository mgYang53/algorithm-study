const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const [a, b] = input.map(Number);

console.log(a * (b % 10));
console.log(a * parseInt((b % 100) / 10));
console.log(a * parseInt(b / 100));
console.log(a * b);
