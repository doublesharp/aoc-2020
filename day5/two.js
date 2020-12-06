const move = (min, max) => Math.round((max - min) / 2);
const calc = (set, c, m, x) =>
  set
    .split("")
    .reduce(
      ([min, max], letter) =>
        letter === c
          ? [min, max - move(min, max)]
          : [min + move(min, max), max],
      [m, x]
    )[0];
const id =
  require("fs")
    .readFileSync("./input.txt", "utf8")
    .split("\n")
    .reduce((ids, line) => {
      const [, rowSet, columnSet] = line.match(/^(.......)(...)$/);
      const id = calc(rowSet, "F", 0, 127) * 8 + calc(columnSet, "L", 0, 7);
      ids.push(id);
      return ids;
    }, [])
    .sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))
    .find((id, i) => id > 77 && id - 71 !== i) - 1;
console.log(`The missing ID is ${id}.`);
