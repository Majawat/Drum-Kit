
var allButtons = document.querySelectorAll(".drum");
var audioTom1 = new Audio('sounds/tom-1.mp3');

for (var i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener("click",function(){
        drumPlay(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown",function(event){
    drumPlay(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(key){
    key = key.toLowerCase();
    var activeButton = document.querySelector("." + key)
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}


function drumPlay(key){
    
    switch(key.toLowerCase()){
        case "w":
            var audioDrum = new Audio('sounds/tom-1.mp3');
            break;
        case "a":
            var audioDrum = new Audio('sounds/tom-2.mp3');
            break;
        case "s":
            var audioDrum = new Audio('sounds/tom-3.mp3');
            break;
        case "d":
            var audioDrum = new Audio('sounds/tom-4.mp3');
            break;
        case "j":
            var audioDrum = new Audio('sounds/snare.mp3');
            break;
        case "k":
            var audioDrum = new Audio('sounds/crash.mp3');
            break;
        case "l":
            var audioDrum = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            console.log(key);
            return;
    }
    audioDrum.play()
}









var houseKeeper1 = new HouseKeeper("Mary","Doe",29,true,8,[30,"DD"]);

function HouseKeeper (firstName,lastName,age,hasWorkPermit,hotness,braSize){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.hotness = hotness;
    this.braSize = braSize;
    this.clean = function(location){
        console.log("Cleaning " + location + "!");
    }
}

function add(num1,num2){
    return num1+num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function divide(num1,num2){
    if(num2!=0){
        return num1/num2;
    }else{return "undefined";}
}
function modulo(num1,num2){
    return num1%num2;
}

function calculator(num1,num2,operator){
    return operator(num1,num2)
}

