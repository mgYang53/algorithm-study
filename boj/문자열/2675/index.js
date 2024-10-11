const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(" ");
  let answer = "";

  S.split("").forEach((s) => {
    answer += s.repeat(Number(R));
  });

  console.log(answer);
}
