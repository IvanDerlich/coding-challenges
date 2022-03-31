const program = require('./program');
const chai = require('chai');

it('Test Case #1', function () {
    const competitions = [
      ['HTML', 'C#'],
      ['C#', 'Python'],
      ['Python', 'HTML'],
    ];
    const results = [0, 0, 1];
    const expected = 'Python';
    const actual = program.tournamentWinner(competitions, results);
    chai.expect(actual).to.deep.equal(expected);
  });
  