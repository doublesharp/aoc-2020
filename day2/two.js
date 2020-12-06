const valid = require("fs")
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .reduce((valid, line) => {
    const [, min, max, c, password] = line.match(/(\d+)-(\d+) (.): (.*)/);
    const [first, last] = [min, max].map((i) => password.substr(i - 1, 1));
    return (
      valid +
      ((first === c && last !== c) || (first !== c && last === c) ? 1 : 0)
    );
  }, 0);
console.log(`There are ${valid} valid passwords`);
