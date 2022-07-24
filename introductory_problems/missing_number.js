let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

function main(input) {
  input = input.split("\n");
  const n = parseInt(input[0]);
  const arr = input[1].split(" ").map((x) => parseInt(x));
  let sum = 0;
  for (let x of arr) {
    sum += x;
  }
  const maxSum = (n * (n + 1)) / 2;
  const ans = maxSum - sum;
  console.log(ans);
}
