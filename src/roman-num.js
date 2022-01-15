const numerals = {
  M:  1000,
  CM: 900,
  D:  500,
  CD: 400,
  C:  100,
  XC: 90,
  L:  50,
  XL: 40,
  X:  10,
  IX: 9,
  V:  5,
  IV: 4,
  I:  1
};

export default function toRoman(num) {
  if (
    typeof num !== 'number' ||
    num !== parseInt(num, 10) ||
    num < 0 ||
    num > 3999
  ) {
    return null;
  } else if (num === 0) {
    return '';
  } else {
    for (const [roman, arabic] of Object.entries(numerals)) {
      if (num >= arabic) {
        return roman + toRoman(num - arabic);
      }
    }
  }
}
