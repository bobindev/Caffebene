console.log("TRAIN AREA");
 /*
  M-TASK: 

  Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni o'zi va hamda o'sha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin.
  MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];
  */

  function getSquareNumbers(arr:any)  {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push({number: arr[i], square: arr[i]**2});
    }
    return result;

    
  }
console.log(getSquareNumbers([1, 2, 3]));
