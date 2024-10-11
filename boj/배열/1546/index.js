const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const scores = input[1].split(" ").map(Number);
const maxScore = Math.max(...scores);

const newScores = scores.map((score) => (score / maxScore) * 100);

console.log(newScores.reduce((acc, cur) => acc + cur) / N);
