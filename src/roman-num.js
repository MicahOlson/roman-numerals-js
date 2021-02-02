// dictionary: M=1000, CM=900, D=500, CD=400, C=100, XC=90, L=50, XL=40, X=10, IX=9, V=5, IV=4, I=1

const numerals = [
  {value: 4, numeral: "IV"},
  {value: 1, numeral: "I"}
]

export default function toRoman(num) {
  let romanNum = "";

  numerals.forEach(function(item) {
    for (; num >= item.value; num -= item.value) {
      romanNum += item.numeral;
    }
  });
  return romanNum;
}