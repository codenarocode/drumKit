let arr = document.querySelectorAll(".drum");


for (let i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function(){
      let key  = this.innerHTML;
      execute(key);
      changeStyle(key);
  });
}

document.addEventListener("keydown",function(event){
    execute(event.key);
    changeStyle(event.key);
});


  function execute(key){

    switch (key) {

      case "w":
       let crash= new Audio("sounds/crash.mp3");
       crash.play();
        break;

      case "a":
      let kick= new  Audio("sounds/kick-bass.mp3");
      kick.play();
        break;

      case "s":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
        break;

      case "d":
      let tom1= new Audio("sounds/tom-1.mp3");
      tom1.play();
        break;

      case "j":
      let tom2= new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
      let tom3= new Audio("sounds/tom-3.mp3");
      tom3.play();
        break;

      case "l":
      let tom4= new Audio("sounds/tom-4.mp3");
      tom4.play();
        break;

      default: console.log(key);

    }
}

function changeStyle(key){
  let x= document.querySelector("." + key);
  x.classList.add("pressed");
  setTimeout(function(){
    x.classList.remove("pressed");
  },200);
}
