import toRoman from './../src/roman-num.js';

describe('toRoman', () => {

  test("should correctly convert '1' to 'I'", () => {
    expect(toRoman(1)).toEqual('I');
  });
});