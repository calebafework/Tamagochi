console.log('WAVE CHECK')

//image variables
let sadTama = document.getElementById('/pic1.gif')
// sad.setAttribute('class','hunger');
// sad.innerHTML=`Happy: ${happy}`;
let happyTama = document.getElementById('/pic2.gif')

let health = 100
let happiness= 100
let hunger= 100
let timer= 1000

//health
let healthy = document.querySelector('#health');
healthy.setAttribute('class','health');
healthy.innerHTML=`Health: ${health}`;

//hunger
let hungry = document.querySelector('#hunger');
hungry.setAttribute('class','hunger');
hungry.innerHTML=`Hunger: ${hunger}`;

//happiness
let happyLvl = document.querySelector('#happy');
happyLvl.setAttribute('class','happy');
happyLvl.innerHTML=`Happy: ${happy}`;

// //timer
// let timer = document.createElement('div');
// timer.setAttribute('class','timer');
// timer.innerHTML="Timer: 0";

//create sickTama getAttribute
// sickTama: function(){
    
// },

const lowerHunger = function(){
    hunger-= 20
    //WILL HUNGER EFFECT HEALTH?
    // if(hunger ==){
        
    // }
    hungry.innerHTML=`Hunger:${hunger}`;
    if(hunger ===0){
        clearInterval(hungerTime)
        //STOP TIMER HERE
        alert("Your negligence has caused Caleb to got to the hospital. Intergalactic CPS has been notified and the Police are on their way! GAME OVER SCUMBAG!")
    }
}
let hungerTime
const hungryFunc = ()=>{
    hungerTime = setInterval(lowerHunger, 1000)
}

// happyTama: function(){

// }

//the timer will start counting down from 5mins
//the sick will start its random function to determine if the caleb will get sick
//the hunger will count down from 15secs to determine caleb's hunger levels
// sick === true -25 happiness points
// hungry === true -25 happiness points

//if health or happiness === 0 
    //modal pop up "You've been a negligent parent causing Caleb to got to the hospital. 
    //Intergalactic CPS have been notified and the Police are on their way! GAME OVER SCUMBAG!"
    document.getElementById("restart-button").addEventListener("click", function(){
        hungryFunc()
        }
    )     
