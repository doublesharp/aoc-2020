const trees = require("fs").readFileSync("input.txt", "utf8").split("\n")
  .reduce((trees, line, i) => 
    trees + (line[(i * 3) % line.length] === "#" ? 1 : 0)
  , 0);
console.log(`There are ${trees} trees on the slope.`);