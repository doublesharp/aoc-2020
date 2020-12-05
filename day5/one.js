const move = (min, max) => Math.round((max - min) / 2);
const calc = (set, c, m, x) => set.split('').reduce(([min, max], letter) =>
  letter === c ? [min, max-move(min, max)] : [min+move(min, max), max], [m, x])[0];
const highest = require("fs").readFileSync("./input.txt", "utf8").split("\n")
  .reduce((highest, line) => {
    const [, rowSet, columnSet] = line.match(/^(.......)(...)$/);
    const id = (calc(rowSet, 'F', 0, 127) * 8) + calc(columnSet, 'L', 0, 7);
    return id > highest ? id : highest;
  }, 0);
console.log(`The highest seat ID is ${highest}.`);