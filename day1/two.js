const vals = require('./input.json');let first, second, third;
vals.some((val1) =>
  vals.some((val2) => {
    vals.some((val3) => {
      if (val1 + val2 + val3 === 2020) {
        first = val1;
        second = val2;
        third = val3;
        return true;
      }
    })
  })
);
console.log(`${first} * ${second} * ${third} = ${first * second * third}`);