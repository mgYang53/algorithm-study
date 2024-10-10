const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

let [h, m] = input[0].split(" ").map(Number);
const duration = Number(input[1]);

const mSum = duration + m;

if (mSum >= 60) {
  h += parseInt(mSum / 60);
  m = mSum % 60;

  if (h > 23) h -= 24;
  if (m > 59) m -= 60;
} else {
  m = mSum;
}

console.log(h, m);
