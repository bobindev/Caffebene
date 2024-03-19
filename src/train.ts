console.log("TRAIN AREA");
//TASK - N

function palindromCheck(str:any) {

  const reversedString = str.split('').reverse().join('');
  if(str === reversedString)
        return true;
  else
        return false;
}

console.log(palindromCheck ("kiyik"));