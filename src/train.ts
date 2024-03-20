console.log("TRAIN AREA");
//TASK - O

function calculateSumOfNumbers(arr: any[]): any {
      let sumeNumber = 0;
      for (let i = 0; i < arr.length; i++) {
          if (typeof arr[i] === "number"){
            sumeNumber += arr[i];
          }
      }
      return sumeNumber;
  
  }
  
  console.log(calculateSumOfNumbers([10, "10", {son: 10}, true, 35]));