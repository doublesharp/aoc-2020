const valid = require('fs')
  .readFileSync('input.txt', 'utf8')
  .split('\n')
  .reduce((valid, line) => {
    const [, min, max, letter, password] = line.match(/(\d+)-(\d+) (.): (.*)/);
    const count = (password.match(new RegExp(letter, 'g')) || []).length;
    return valid + (count >= min && count <= max ? 1 : 0);
  }, 0);
console.log(`There are ${valid} valid passwords`);
