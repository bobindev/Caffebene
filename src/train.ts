console.log("TRAIN AREA");
//TASK - Z

function sumEvens(arr:any) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(sumEvens([1, 2, 3, 4, 5]));


