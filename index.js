//event listener to perform on the mouse clicks
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHtmlLetter = this.innerHTML;
    playKeySound(buttonInnerHtmlLetter);
    AddAnimation(buttonInnerHtmlLetter)
  });
}

// Event listener to perform the action on the key press
document.addEventListener("keypress",function(event){
    var keyboardletter = event.key.toLowerCase();
    playKeySound(keyboardletter);
    AddAnimation(keyboardletter)
});


//main function to decide the sound
function playKeySound(letterType){
  switch (letterType) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var bass = new Audio('sounds/kick-bass.mp3');
      bass.play();
      break;
    default:
      console.log(letterType);
  }
}



function AddAnimation(key){

  var active_button = document.querySelector("."+key)
  active_button.classList.add("pressed");

  window.setTimeout(function(){
    active_button.classList.remove("pressed");
  }, 100);


}
