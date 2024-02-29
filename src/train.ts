console.log("TRAIN AREA");
/*
H-TASK: 
shunday function tuzing, 
u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12"

Arithmetic:
1. function yaratish
2. o'zgaruvchi hosil qilish
3. loop yaratish
4. in condition: agar qiymat musbat bo'lsa, o'zgaruvchiga qiymat olish
5. o'zgaruvchiga qiymat qo'shish
6. qiymatni return qilish

*/
function getPositive(arr: any) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        result += arr[i];
      }
    } return result;
  }
  
  console.log(getPositive([1, -4, 2])); 
