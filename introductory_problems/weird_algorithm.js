const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on("line", (line) => {
  const n = parseInt(line);
  main(n);
});

function main(n) {
  while (n !== 1) {
    log(n + " ");
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
  }
  log("1");
  end();
}

function log(text) {
  process.stdout.write(text);
}

function end() {
  log("\n");
  process.exit(0);
}
