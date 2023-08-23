
for(var i=0;i < document.querySelectorAll(".drum").length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    var button1=this.innerHTML;
     forswitch(button1);          
    boxAnimation(button1);
});
}

document.addEventListener("keypress",function(event){
  forswitch(event.key);
  boxAnimation(event.key);
    
});

function forswitch(key){
    switch(key){
        case "w":
            var tom1=new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "a":
            var tom1=new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        case "s":
            var tom1=new Audio("sounds/snare.mp3");
            tom1.play();
            break;       
        case "d":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom1=new Audio("sounds/tom-2.mp3");
            tom1.play();
            break;
        case "k":
            var tom1=new Audio("sounds/tom-3.mp3");
            tom1.play();
            break;
        case "l":
            var tom1=new Audio("sounds/tom-4.mp3");
            tom1.play();
            break;
      }

}
   
function boxAnimation(currentbutton){
    var Activebutton=document.querySelector("."+currentbutton);
    Activebutton.classList.add("pressed");
    setTimeout(function(){
        Activebutton.classList.remove("pressed");
    },200);

}