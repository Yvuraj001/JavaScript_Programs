// const prompt = require('prompt-sync')()


const randomletter = () => {
    const letter = ["w", "s", "g"]
    return letter[Math.floor(Math.random() * letter.length)]
}


let usr = prompt("Enter w, g, or s:").toLowerCase();
 

let com = randomletter()


const numtoletter = (letter) => {
    if (letter === "w") return 2;
    if (letter === "g") return 4;
    if (letter === "s") return 6;
}


let usrchoice = numtoletter(usr)
let comchoice = numtoletter(com)

let brk = 0;

let usrpoints = 0;
let compoints =0;


while(brk<5){
    
 
    usrchoice = numtoletter(usr)

     com = randomletter()
     comchoice = numtoletter(com)

      
    let div = Math.abs(comchoice / usrchoice);
    brk++

if(div == 0.5   ){
    console.log("Computer1 Wins this round ")
    compoints++
}
else if(div==2){
     console.log("You Win this round ")
     usrpoints++
}
else if(div<1 && div>0.1){
     console.log("You Win this round ")
     usrpoints++
}
else if(div==3){
     console.log("Computer Win this round ")
     compoints++
}
else if(div<1 && div>0.3){
     console.log("Computer Win this round ")
     compoints++
}
else if(div==1.5){
     console.log("You Win this round ")
      usrpoints++
}
else if(div == 1){
    console.log("This was a draw round")
}
    usr = prompt("Enter w, g, or s:").toLowerCase();   
}

if(usrpoints>compoints){
    alert("🎉🎉 You win the game with " +usrpoints+ " points.")
}

else if(compoints>usrpoints){

   alert("Sorry, but computer wins this game.")
    
}

 


 