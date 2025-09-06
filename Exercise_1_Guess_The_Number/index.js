// const prompt = require('prompt-sync')()


function random(min, max){
   
     return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = random(1, 30)  
// console.log(a)  
let  b  =  Number.parseInt(prompt("Guess the number between 1 and 30") )
 

let guess = 1;
while(b != a){
   guess++;
   let diff = Math.abs(a - b);
  // b =  Number.parseInt(prompt("Guess the number between 1 and 30") )
    
  if (diff >= 25 && 30 >= diff) {
    console.log("You've entered a much  lower number")
    // b=  prompt("Guess again");
} 
 else if (diff  >=20 && diff<25) {
   console.log("The number is still lower")
    // b=  prompt("Guess again");

} 
else if (diff >= 15 && diff<20) {
  console.log("Nope almost 15-20 less")
    // b=  prompt("Guess again");
  }

else if (diff >= 10 && diff<15) {
  console.log("You are still far")
    // b=  prompt("Guess again");
} 
else if (diff  <= 5 && diff<10) {
  console.log("You are close to the number")
    // b=  prompt("Guess again");
} 
else if (diff >= 0 && diff<5) {
  console.log("You are too & very close to the number")
    // b=  prompt("Guess again");
} 
b  =  Number.parseInt(prompt("Guess the number between 1 and 30") )
}
 
if(b==a){console.log("🎉 You have gussed the correct number")
  console.log("You guessed the number in "+guess+" Times")
}

 