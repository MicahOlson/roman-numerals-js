import toRoman from './../src/roman-num.js';

describe('toRoman', () => {
  test('should correctly convert 1 to I', () => {
    expect(toRoman(1)).toBe('I');
  });

  test('should correctly convert 2 to II', () => {
    expect(toRoman(2)).toBe('II');
  });

  test('should correctly convert 3 to III', () => {
    expect(toRoman(3)).toBe('III');
  });

  test('should correctly convert 4 to IV', () => {
    expect(toRoman(4)).toBe('IV');
  });

  test('should correctly convert 3998 to MMMCMXCVIII', () => {
    expect(toRoman(3998)).toBe('MMMCMXCVIII');
  });

  test('should return null if the argument is not a number', () => {
    expect(toRoman('one')).toBeNull();
  });

  test('should return null if the argument is not an integer', () => {
    expect(toRoman(1.5)).toBeNull();
  });

  test('should return null if the argument is less than 0', () => {
    expect(toRoman(-1)).toBeNull();
  });

  test('should return null if the argument is greater than 3999', () => {
    expect(toRoman(4000)).toBeNull();
  });

  test('should return an empty string for 0', () => {
    expect(toRoman(0)).toBe('');
  });
});
