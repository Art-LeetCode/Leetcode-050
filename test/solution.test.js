var chai = require("chai");
chai.should();

var solution = require("../src/solution.js");

describe("solution pow(x,n)", () => {
  dataSet = [
    { x: 2, n: 10, expected: 1024 },
    { x: -2, n: 9, expected: -512 },
    { x: 2, n: -3, expected: 0.125 },
    { x: -2, n: -3, expected: -0.125 },
    { x: -2, n: -2, expected: 0.25 }
  ];
  dataSet.forEach(d => {
    it(`${d.x}^${d.n}=${d.expected}`, () => {
      let sut = new solution();
      let actual = sut.MyPow(d.x, d.n);
      actual.should.equal(d.expected);
    });
  });
});
