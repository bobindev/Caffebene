console.log("TRAIN AREA");
//TASK - S

function missingNumber(arr: any) {
   let min = Math.min(...arr);
   let max = Math.max(...arr);
   let result = [];
   for (let i = min; i <= max; i++) {
     if (!arr.includes(i)) {
       result.push(i);
     }
   }
   return result[0];
 }
 console.log(missingNumber([3, 0, 1]));

