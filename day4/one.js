
const list = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const base = list.reduce((keys, k) => ({ ...keys, [k]: false }), {});
const valid = require("fs").readFileSync("./input.txt", "utf8").split("\n\n")
  .reduce((valid, line) => valid + (Object.values(
    line.replace(/\n/g, " ").split(" ").reduce((keys, pair) => {
      const [k] = pair.split(":"); 
      return { ...keys, [k]: true };
    }, { ...base })
  ).every((value) => value) ? 1 : 0), 0);
console.log(`There are ${valid} valid passports.`);