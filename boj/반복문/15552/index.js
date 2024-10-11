const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .split("\n");

const T = input[0];
let answer = "";

// log를 여러 번 출력하는 것보다 문자열에 담아서 한번에 출력하는 것이 훨씬 빠름
for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer += a + b;
  answer += "\n";
}

console.log(answer);
