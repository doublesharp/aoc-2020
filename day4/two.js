const list = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const base = list.reduce((keys, key) => ({ ...keys, [key]: false }), {});
const tests = {
  byr: (x) => x >= 1920 && x <= 2002,
  iyr: (x) => x >= 2010 && x <= 2020,
  eyr: (x) => x >= 2020 && x <= 2030,
  hgt: (x) => {
    const [, amount, unit] = x.match(/^(\d+)(cm|in)$/) || [];
    return (
      (unit == "cm" && amount >= 150 && amount <= 193) ||
      (unit === "in" && amount >= 59 && amount <= 76)
    );
  },
  hcl: (x) => !!x.match(/^#[0-9a-f]{6,6}$/),
  ecl: (x) => !!x.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/),
  pid: (x) => !!x.match(/^\d{9,9}$/),
};
const valid = require("fs")
  .readFileSync("./input.txt", "utf8")
  .split("\n\n")
  .reduce(
    (c, line) =>
      c +
      (Object.values(
        line
          .replace(/\n/g, " ")
          .split(" ")
          .reduce(
            (keys, pair) => {
              const [key, value] = pair.split(":");
              return tests[key] ? { ...keys, [key]: tests[key](value) } : keys;
            },
            { ...base }
          )
      ).every((value) => value)
        ? 1
        : 0),
    0
  );
console.log(`There are ${valid} valid passports.`);
