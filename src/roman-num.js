const numerals = [
  { arabic: 1000, roman: 'M' },
  { arabic: 900, roman: 'CM' },
  { arabic: 500, roman: 'D' },
  { arabic: 400, roman: 'CD' },
  { arabic: 100, roman: 'C' },
  { arabic: 90, roman: 'XC' },
  { arabic: 50, roman: 'L' },
  { arabic: 40, roman: 'XL' },
  { arabic: 10, roman: 'X' },
  { arabic: 9, roman: 'IX' },
  { arabic: 5, roman: 'V' },
  { arabic: 4, roman: 'IV' },
  { arabic: 1, roman: 'I' },
];

export default function toRoman(num) {
  if (typeof num !== 'number' || num !== parseInt(num, 10)) {
    return null;
  }
  if (num < 1) {
    return '';
  } else {
    for (let i = 0; i < numerals.length; i++) {
      if (num >= numerals[i].arabic) {
        return numerals[i].roman + toRoman(num - numerals[i].arabic);
      }
    }
  }
}
