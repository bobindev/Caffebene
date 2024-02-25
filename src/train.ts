console.log("TRAIN AREA");
/*E-TASK: 

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh".
1. Function yaratish
2. stringni arrayga otkazish
3. arrayni reverse qilish va natijani string uchun join qilish 
4. return qaytarish

@MITASK
*/

function getReverse (str:string) {
   const arr = str.split("");
   const new_str = arr.reverse().join('');
   return new_str;
}
console.log(getReverse("hello"));