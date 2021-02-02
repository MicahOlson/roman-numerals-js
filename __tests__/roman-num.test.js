import toRoman from './../src/roman-num.js';

describe('toRoman', () => {

  test("should correctly convert '1' to 'I'", () => {
    expect(toRoman(1)).toEqual('I');
  });

  test("should correctly convert '2' to 'II'", () => {
    expect(toRoman(2)).toEqual('II');
  });

  test("should correctly convert '3' to 'III'", () => {
    expect(toRoman(3)).toEqual('III');
  });

  test("should correctly convert '4' to 'IV", () => {
    expect(toRoman(4)).toEqual('IV');
  });
});