const sum = require('fs')
  .readFileSync('./input.txt', 'utf8')
  .split('\n\n')
  .reduce(
    (sum, group) =>
      sum +
      Object.keys(
        group
          .split('\n')
          .reduce(
            (letters, person) =>
              person
                .split('')
                .reduce(
                  (letters, letter) => ({ ...letters, [letter]: true }),
                  letters
                ),
            {}
          )
      ).length,
    0
  );
console.log(`The sum of the counts is ${sum}.`);
