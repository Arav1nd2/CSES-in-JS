let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => main(_input));

function main(input) {
  input = input.split("\n");
  const n = parseInt(input[0]);
  const arr = input[1].split(" ").map((x) => parseInt(x));
  let ans = 0;
  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      ans += arr[i - 1] - arr[i];
      arr[i] = arr[i - 1];
    }
  }
  console.log(ans.toString());
}
