console.log("TRAIN AREA");
//TASK - ZB

function randomBetween (min:number, max:number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(randomBetween(30,50));

//TASK - ZC

function celsiusToFahrenheit(cel:number) {
  let fahren = (cel * 9/5) + 32;
  return fahren;
}

console.log(celsiusToFahrenheit(0));