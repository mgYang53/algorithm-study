const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  const testCase = input[i].split(" ").map(Number);
  const N = testCase.shift();
  const avg = testCase.reduce((acc, cur) => acc + cur) / N;
  const ratio = (testCase.filter((tc) => tc > avg).length / N) * 100;

  console.log(ratio.toFixed(3) + "%");
}
