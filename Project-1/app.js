console.log('WAVE CHECK')

//ACTION VARIABLES
let health = 100
let happiness= 100
let hunger= 100
let timer= 5000

//HEALTH
let healthy = document.querySelector('#health');
healthy.setAttribute('class','health');
healthy.innerHTML=`Health: ${health}`;
//HAPPINESS
let happyLvl = document.querySelector('#happy');
happyLvl.setAttribute('class','happy');
happyLvl.innerHTML=`Happiness: ${happiness}`;
//HUNGER
let hungry = document.querySelector('#hunger');
hungry.setAttribute('class','hunger');
hungry.innerHTML=`Hunger: ${hunger}`;
//TIMER
let time = document.querySelector('#timer');
time.setAttribute('class','timer');
time.innerHTML=`Timer: ${timer}`;
//FOODBTN 
let foodButton = document.querySelector('#foodbtn');
time.setAttribute('class','foodbtn');
//MEDSBTN
let medsButton= document.querySelector('#medsbtn');
time.setAttribute('class','medsbtn');
//LOVEBTN
let loveButton = document.querySelector('#lovebtn');
time.setAttribute('class','lovebtn');
//SWITCHIMG
let switchImg = document.getElementById('parent-image')

//TIMER INTERVALS
const lowerTimer = function(){
    timer-= 1
    time.innerHTML=`Timer: ${timer}`;
    if(timer <= 0){
        console.log('fsd')
        clearInterval(stopTime)
        //STOP TIMER HERE
    }
}
let stopTime
const timeFunc = ()=>{
    stopTime = setInterval(lowerTimer, 1000)
}

//LOWER HUNGER
const lowerHunger = function(){
    hunger-= 20
    //WILL HUNGER EFFECT HEALTH?
    // if(hunger ==){
    // }
    
    //SWITCH IMG TO SAD
    switchImg.src='tamagotchi-sad.gif'
    hungry.innerHTML=`Hunger:${hunger}`;

    if(hunger <= 0){
        clearInterval(hungerTime)
        //STOP TIMER HERE
        triggerAlert()
    }
}
let hungerTime
const hungryFunc = ()=>{
    hungerTime = setInterval(lowerHunger, 12000)
}
//SICK FUNCTION
const sick = function(){    
    if(Math.floor(Math.random(10)) %2=== 0 ){
        return true
    }
    return false
}
//HAPPINESS FUNCTION
const happinessfunc = function(){

    if(health < 60 || hunger < 60 || happiness < 60){
        happiness -= 20
     //SWITCH IMG TO SAD
    switchImg.src='tamagotchi-sad.gif'
    hungry.innerHTML=`Hunger:${hunger}`;
    }
}

const triggerAlert = function(){
    alert("Your negligence has caused Caleb to got to the hospital. Intergalactic CPS has been notified and the Police are on their way! GAME OVER SCUMBAG!")
}


//the timer will start counting down from 5mins
//the sick will start its random function to determine if the caleb will get sick
//the hunger will count down from 15secs to determine caleb's hunger levels
// sick === true -25 happiness points
// hungry === true -25 happiness points

document.getElementById("foodbtn").addEventListener("click", function(){
        if(hunger ===100){
            //SWITCH IMG TO SAD
            console.log('check')
            switchImg.src='tamagotchi-happy.gif'      
        } else if(hunger > 80 && hunger < 100){
            hunger = 100
        } else {
            hunger += 20    
        }
        //feed first then add health
        //check sick function 
        const isSick = sick()
        if(isSick===true){
            health -= 40
            switchImg.src='tamagotchi-sad.gif'
            hungry.innerHTML=`Hunger:${hunger}`;
        }
    }
)     
//
document.getElementById("medsbtn").addEventListener("click", function(){
        if(health ===100){
            //Do nothing because health is full
        }else if(health > 60 && health < 100){
            health = 100
        }else{
            health += 40
        }
    
    }
)     
//
document.getElementById("lovebtn").addEventListener("click", function(){
        // if(health ===100){
        //     //Do nothing because health is full
        // }else if(health > 60 && health < 100){
        //     health = 100
        // }else{
        //     health += 40
        // }

    }
)     
//RESTART BUTTON, PLAY
    document.getElementById("restart-button").addEventListener("click", function(){
        hungryFunc()
        timeFunc()
        }
    )     
