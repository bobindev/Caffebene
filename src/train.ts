console.log("TRAIN AREA");
//TASK - V

function countChars(str: any) {
  let obj:any = {};
   for(let i=0;i<str.length;i++) {
       if(obj[str[i]])
           {
               obj[str[i]]++; 
           }
       else
       {
           obj[str[i]]=1; 

       }
   }return obj;
}

console.log(countChars("hello"));

