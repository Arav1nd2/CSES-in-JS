let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (x) => (_input += x));
process.stdin.on("end", () => main(_input));

// NOTE: The following code gives a TLE in the online judge, need to check if there are any optimizations
// that can be done. Time Complexity of current algorithm is O(1) and space complexity is also O(1)
// Maybe TLE is because of the slow execution of JS. From algo stand point this is the most efficient algorithm
function main(input) {
  input = input.split("\n");
  let t = parseInt(input[0]);
  for (let i = 0; i < t; i++) {
    const line = input[i + 1].split(" ");
    const x = parseInt(line[0]);
    const y = parseInt(line[1]);
    solve(x, y);
  }
}

function solve(x, y) {
  const z = Math.max(x, y);
  const seq = z % 2 === 0 ? -1 : 1;
  const rowStart = z % 2 === 0 ? z * z : (z - 1) * (z - 1) + 1;
  let ans = rowStart + seq * (y - 1);
  if (y > x) {
    ans += seq * (y - x);
  }
  console.log(ans);
}
