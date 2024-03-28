console.log("TRAIN AREA");
//TASK - Q

function calculate (str: string) {
    let arr = str.split("");
    let sum = 0;
   for(let i = 0; i < arr.length; i++){
      const el = arr[i]; 
      if(+el){
         sum += +el;
      };
   };
   return sum;  
}

console.log(calculate("5+2"));