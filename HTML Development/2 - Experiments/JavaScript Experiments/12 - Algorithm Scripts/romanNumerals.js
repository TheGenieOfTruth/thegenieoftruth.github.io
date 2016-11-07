/*
Rules:
Smaller number after = Add. Eg: VI -> 6
Larger number after = Subtract. Eg: IV -> 4
Thousands place:
  M is used to mark one thousand.
  Eg: M -> 1000
  Eg: MM -> 2000
  ...
Hundreds place:
  Uses C(100) D(5000)
  900: CM
  800: DCCC
  700: DCC
  600: DC
  500: D
  400: CD
  300: CCC
  200: CC
  100: C
Tens place:
  Uses X (10) L(50)
  90: XC
  80: LXXX
  70: LXX
  60: LX
  50: L
  40: XL
  30: XXX
  20: XX
  10: X
Units place:
  9: IX
  8: VIII
  7: VII
  6: VI
  5: V
  4: IV
  3: III
  2: II
  1: I
And then written as
Thousands Hunderds Tens Units
Eg: MMMMM|D|L|V or MMMMMDLV would be 5555
If you are missing a place, you can just skip the place
Eg: MMMMM|None|X|V or VXMMMMM would be 50005
*/
function convertToRoman(num) {
 var numerals = [
   "CM DCCC DCC DC D CD CCC CC C".split(" ").reverse(),
   "XC LXXX LXX LX L XL XXX XX X".split(" ").reverse(),
   "IX VIII VII VI V IV III II I".split(" ").reverse()
 ];
var units = Math.floor(num % 10);
var tens = Math.floor(num/10 %10);
var hundreds = Math.floor(num/100 %10);
var thousands = Math.floor(num/1000);
function get(location,array){
  if(location===0){
    return '';
  } else{
    return array[location-1];
  }
}
function repeat(string,times){
  var end = "";
  for(i=0;i<times;i++){
    end+=string;
  }
  return end;
}
 return repeat("M",thousands)+get(hundreds,numerals[0])+get(tens,numerals[1])+get(units,numerals[2]);
}

convertToRoman(1968);
