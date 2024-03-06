console.log("TRAIN AREA");
/*
I-TASK: 

Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
MASALAN: getDigits("m14i1t") return qiladi "141"
*/

function getDigits(str: any): any {
  let new_str = '';
  for (let i = 0; i < str.length; i++) {
      if (str[i] >= 0 && str[i] <= 9){
          new_str+=str[i];
      }
  }return new_str;
 
}
console.log(getDigits("m14i1t"));