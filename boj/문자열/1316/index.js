const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  const str = input[i];
  if (check(str)) count += 1;
}

console.log(count);

function check(data) {
  let set = new Set(data[0]);
  for (let i = 0; i < data.length - 1; i++) {
    // 오른쪽 글자와 다르다면
    if (data[i] !== data[i + 1]) {
      // 오른쪽 글자가 이미 나왔다면
      if (set.has(data[i + 1])) {
        return false;
      } else {
        set.add(data[i + 1]);
      }
    }
  }
  return true;
}
