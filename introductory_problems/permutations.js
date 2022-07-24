let _input = "";
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on("data", (data) => (_input += data));
process.stdin.on("end", () => main(_input));

/* LINKED LIST BASED SOLUTION
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

function buildLinkedList(arr) {
  let first = new Node(arr[0]);
  let firstPTR = first;
  for (let i = 1; i < arr.length; i++) {
    const newNode = new Node(arr[i]);
    firstPTR.next = newNode;
    newNode.prev = firstPTR;
    firstPTR = newNode;
  }
  return { first, last: firstPTR };
}
function main(input) {
  const n = parseInt(input);
  let { first, last } = buildLinkedList([2, 4, 1, 3]);
  if (n === 1) {
    console.log(1);
    return;
  }
  if (n < 4) {
    console.log("NO SOLUTION");
    return;
  }
  for (let i = 5; i <= n; i++) {
    if (i % 2 === 0) {
      const newNode = new Node(i);
      last.next = newNode;
      newNode.prev = last;
      last = newNode;
    } else {
      const newNode = new Node(i);
      newNode.next = first;
      first.prev = newNode;
      first = newNode;
    }
  }
  let ans = "";
  while (first !== null) {
    ans += first.val + " ";
    first = first.next;
  }
  ans += "\n";
  process.stdout.write(ans);
}
*/

function main(input) {
  const n = parseInt(input);
  if (n === 1) {
    console.log(1);
    return;
  }
  if (n < 4) {
    console.log("NO SOLUTION");
    return;
  }
  let ans = "2 4 1 3";
  for (let i = 5; i <= n; i++) {
    if (i % 2 === 0) {
      ans += " " + i;
    } else {
      ans = i + " " + ans;
    }
  }
  console.log(ans.trim());
}
