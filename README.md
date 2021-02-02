// dictionary: M=1000, CM=900, D=500, CD=400, C=100, XC=90, L=50, XL=40, X=10, IX=9, V=5, IV=4, I=1



describe: isRomanNumeral() Test: "It determines if input is a number" Expect (isRomanNumeral(& LOL *$)).toEqual(false);

Test: "Program limits input of number to be <= 3999" Expect (isRomanNumeral(4000)).toEqual(false);

Test: "It recognizes single digits" Expect (toRomanNumeral(9)).toEqual(ones);

Test: "It recognizes double digits" Expect (toRomanNumeral(10)).toEqual(tens);

Test: "It recognizes triple digits" Expect (toRomanNumeral(100)).toEqual(hundred);

Test: "It recognizes quadrouple digits" Expect (toRomanNumeral(1000)).toEqual(thousands);

Test: "It recognizes more than three of the same characters in a row" Expect (isRomanNumeral(IIII)).toEqual(false);

Test: "It recognizes ones, tens, hundreds, and thousands have to be seperate" Expect (toRomanNumeral(99)).toEqual(ICIX);

Test: "It recognizes the digits V, L, and D are never repeated" Expect (isRomanNumeral(VV)).toEqual(false);

describe: toRomanNumeral() Test: "It converts numbers to their corresponding Roman Numeral symbols" Expect (toRomanNumeral(1)).toEqual(I);

Test: "It adds the values of all the converted symbols" Expect (toRomanNumeral(2)).toEqual(II);

Test: "It adds the values of more than three of the same characters in a row plus one additional of the repeated character" Expect (toRomanNumeral(IIII)).toEqual(V);

Test: "Program will switch to subtraction when equal to false and subtract one of the repeated numeral" Expect (isRomanNumeral(false)).toEqual(--);