
var numOfButtons= document.querySelectorAll(".drum").length;

for(var i=0;i<numOfButtons;i++){

    document.querySelectorAll("button")[i].addEventListener("click",musicToPlay);

}
function musicToPlay(){

    var buttonName=this.textContent;
    makeSound(buttonName);
    makeAnimation(buttonName);
      
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeSound(key){
       switch (key) {
        case "w":
            var audio= new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio= new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio= new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio= new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio= new Audio("./sounds/snare.mp3");
            audio.play();
            break;

        case "k":
            var audio= new Audio("./sounds/crash.mp3");
            audio.play();
            break;

        case "l":
            var audio= new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}
function makeAnimation(animationKey){

   var activeButton = document.querySelector("." + animationKey);
   
   activeButton.classList.add("pressed");

   setTimeout(remove,100);

   function remove(){
    activeButton.classList.remove("pressed");
   
   }

  

  
}





