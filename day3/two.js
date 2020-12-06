const data = require('fs').readFileSync('input.txt', 'utf8').split('\n');
const product = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2],
]
  .map(([right, down]) =>
    data.reduce(
      ([trees, j], line, i) =>
        i % down === 0
          ? [trees + (line[(j * right) % line.length] === '#' ? 1 : 0), j + 1]
          : [trees, j],
      [0, 0]
    )
  )
  .reduce((product, [result]) => result * product, 1);
console.log(`The product of the number of trees on each slope is ${product}`);
