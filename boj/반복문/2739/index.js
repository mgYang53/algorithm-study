const fs = require("fs");
const input = +fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString();

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
