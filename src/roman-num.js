export default function toRoman(num) {
  let romanNum = "";
  while (num > 0) {
    romanNum += "I";
    num --;
  }
  return romanNum;
}