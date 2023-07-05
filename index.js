//Shows text when Dolly is clicked
const btn = document.getElementById("Dolly");
btn.addEventListener('click', clickDolly);
function clickDolly() {
    var x = document.getElementById("speechBubbleText");
    var container = document.getElementById("instructions");

    if (x.innerHTML === "") {
      x.innerHTML = "I need to get something off my chest!";
    } else if (x.innerHTML === "I need to get something off my chest!") {
      x.innerHTML = "It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?";
    } else if (x.innerHTML === "It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?") {
      x.innerHTML = "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!";
    } else if (x.innerHTML === "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!") {
      x.innerHTML = "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her, you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!";
    } else if (x.innerHTML === "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her, you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!") {
      x.innerHTML = "And you REALLY don't want to catch my clone! Then you'll lose all your points!";
    } else if (x.innerHTML === "And you REALLY don't want to catch my clone! Then you'll lose all your points!") {
      x.innerHTML = " "
      container.style.display = "block";
    }
  }

  //starts sound when start game is clicked

  let playSound = () => new Audio("audio/Jolene.m4a").play()

//hides instructions when game starts

function hideInstructions() {
    var container = document.getElementById("instructions");
    container.style.display = "none";
  }

  //starts the movement of all the floating heads

  function startMovingDC() {
    var image = document.getElementById("dollyCloneGame");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }

  function startMovingJ() {
    var image = document.getElementById("joleneGame");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }
  
  function startMovingW1() {
    var image = document.getElementById("woman1Game");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }
  
  function startMovingW2() {
    var image = document.getElementById("woman2Game");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }
  
  function startMovingW3() {
    var image = document.getElementById("woman3Game");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }
  
  function startMovingW4() {
    var image = document.getElementById("woman4Game");
    var screenWidth = window.innerWidth - image.width;
    var screenHeight = window.innerHeight - image.height;
    
    var interval = setInterval(moveImage, 500);
    
    function moveImage() {
      var randomX = Math.floor(Math.random() * screenWidth);
      var randomY = Math.floor(Math.random() * screenHeight);
      
      image.style.left = randomX + "px";
      image.style.top = randomY + "px";
    }
    
    setTimeout(function() {
      clearInterval(interval);
    }, 160000); 
  }

//points

const totalCount = document.getElementById("totalCount");
var count = 0;
totalCount.innerHTML = count;

const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
};

const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
};

const reset = () => {
  if (count > 0) {
    count = 0;
    totalCount.innerHTML = count;
  }
};

const incrementCount = document.getElementById("joleneGame");
const decrementCount1 = document.getElementById("woman1Game");
const decrementCount2 = document.getElementById("woman2Game");
const decrementCount3 = document.getElementById("woman3Game");
const decrementCount4 = document.getElementById("woman4Game");
const resetCount = document.getElementById("dollyCloneGame");

incrementCount.addEventListener("click", handleIncrement);
decrementCount1.addEventListener("click", handleDecrement);
decrementCount2.addEventListener("click", handleDecrement);
decrementCount3.addEventListener("click", handleDecrement);
decrementCount4.addEventListener("click", handleDecrement);
resetCount.addEventListener("click", reset);


    // function getBubble(){
    //     const myBubble = document.getElementById("bubble");
    //      { 
    //        myBubble.style.display = "block"; 
    //     }) 
    // }


   