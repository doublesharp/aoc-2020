const vals = require('./input.json');
let first, second;
vals.some((val1) =>
  vals.some((val2) => {
    if (val1 + val2 === 2020) {
      first = val1;
      second = val2;
      return true;
    }
  })
);
console.log(`${first} * ${second} = ${first * second}`);