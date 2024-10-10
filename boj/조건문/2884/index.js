const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split(" ");

let [h, m] = input.map(Number);

if (m < 45) {
  if (h === 0) h = 23;
  else h -= 1;
  m += 15;
} else {
  m -= 45;
}

console.log(h, m);
