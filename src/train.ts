console.log("TRAIN AREA");
//TASK - U

function sumOdds(num:number) {
  let sum = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      sum ++;
    }
  }
  return sum;
}

console.log(sumOdds(9));


