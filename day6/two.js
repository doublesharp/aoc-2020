const sum = require("fs").readFileSync("./input.txt", "utf8").split("\n\n")
  .reduce((sum, grouping) => {
    const group = grouping.split("\n");
    const letters = group.reduce((letters, person) =>
      person.split("").reduce((letters, letter) =>
        ({ ...letters, [letter]: (letters[letter] || 0) + 1 }), letters), {});
    const areValid = Object.keys(letters).reduce((valid, key) => 
      letters[key] === group.length ? ({ ...valid, [key]: true }) : valid, {});
    return sum + Object.keys(areValid).length;
  }, 0);
console.log(`The sum of the counts valid for entire group is ${sum}.`);
