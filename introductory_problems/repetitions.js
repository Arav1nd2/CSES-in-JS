let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

function main(input) {
  let localMax = 0,
    ans = 0;
  let prevChar = "";
  let len = input.length;
  for (let i = 0; i < len; i++) {
    if (prevChar === "") {
      prevChar = input[i];
      continue;
    }
    if (prevChar === input[i]) {
      localMax++;
    } else {
      localMax = 0;
      prevChar = input[i];
    }
    ans = Math.max(ans, localMax);
  }
  console.log(ans + 1);
}
