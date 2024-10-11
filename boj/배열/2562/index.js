const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n")
  .map(Number);

let maxValue = -1;
let maxIdx = -1;
for (let i = 0; i < input.length; i++) {
  if (input[i] > maxValue) {
    maxValue = input[i];
    maxIdx = i + 1;
  }
}

console.log(maxValue + "\n" + maxIdx);
