
const list = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const base = list.reduce((s, k) => { s[k] = false; return s; }, {});
const valid = require("fs").readFileSync("./input.txt", "utf8").split("\n\n")
  .reduce((valid, line) => valid + (Object.values(
    line.replace(/\n/g, " ").split(" ").reduce((s, p) => {
      const [k] = p.split(":"); s[k] = true; return s;
    }, { ...base })
  ).every((value) => value) ? 1 : 0), 0);
console.log(`There are ${valid} valid passports.`);