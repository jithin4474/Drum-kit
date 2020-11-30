
    for(var i=0;  i<  document.querySelectorAll(".drum").length;  i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){

      var buttonClick = this.innerHTML;
      soundPlay(buttonClick);
    });

  }

 document.addEventListener("keydown",function(event){

    var keyPress = event.key;

    soundPlay(keyPress);

  })


  function soundPlay(key){

    switch (key) {

      case "w":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/tom-1.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;
      case "a":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/tom-2.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;
      case "s":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/tom-3.mp3');
                      audio.play();
                      setTimeout(function() {document.querySelector("."+key).classList.remove("pressed");} ,50);
                      break;
      case "d":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/tom-4.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;
      case "j":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/snare.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;
      case "k":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/crash.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;
      case "l":       document.querySelector("."+key).classList.add("pressed");
                      var audio=new Audio('sounds/kick-bass.mp3');
                      audio.play();
                      setTimeout(function(){document.querySelector("."+key).classList.remove("pressed");},50);
                      break;

      default:

    }

  }
