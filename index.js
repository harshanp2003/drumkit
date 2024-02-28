var x = document.querySelectorAll(".drum").length;
var i;

for (i = 0; i < x; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function()
  {
    var buttonInnerHTML=this.innerHTML;
    makesound(buttonInnerHTML);
    btnanim(buttonInnerHTML);
  });
  
}
// Creating audio object i.e here creadting audio objects named tom1,tom2,tom3....

/*function handleclick() {
  var b = this.innerHTML;
  // 'this' is the identity of the button that triggered the event listener
  switch (b) {
    case "w":

      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':

      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }

}*/

// Entire webpage listens to the keyboard ,,the name here event can be anything instead of event it can be evnt. The below  is the callback function which is called back by the object
document.addEventListener("keypress", function (event) {
  makesound(event.key);
  btnanim(event.key);
}
                         );
function makesound(key) {
  switch (key) {
    case "w":

      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();

      break;
    case 'a':

      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
  }

}
//btnanim is buttonanimation,cr is currentkey
function btnanim(crkey) {
  var activeButton = document.querySelector("." + crkey);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);

}
