screen.orientation.lock("landscape");

//Shows text when Dolly is clicked
const btn = document.getElementById("Dolly");
btn.addEventListener('click', clickDolly);
function clickDolly() {
    var x = document.getElementById("speechBubbleText");
    var container = document.getElementById("instructions");
    var bubble = document.getElementById("bubble");

    if (x.innerHTML === "") {
      x.innerHTML = "I need to get something off my chest! It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?";
      bubble.style.display="block";
    } else if (x.innerHTML === "I need to get something off my chest! It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?") {
      x.innerHTML = "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!";
    } else if (x.innerHTML === "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!") {
      x.innerHTML = "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her, you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!";
    } else if (x.innerHTML === "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her, you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!") {
      x.innerHTML = "And you REALLY don't want to catch my clone! Then you'll lose all your points! And watch out, sometime you think you've caught Jolene and then... here she comes again!";
    } else if (x.innerHTML === "And you REALLY don't want to catch my clone! Then you'll lose all your points! And watch out, sometime you think you've caught Jolene and then... here she comes again!") {
      x.innerHTML = " "
      bubble.style.display="none";
      container.style.display = "block";
    }
  }

  //starts sound when start game is clicked and things appear when finished

  let playSound = () => {
    let audio = new Audio("audio/Jolene.m4a");
    
    audio.onended = () => {
      var bubble = document.getElementById("bubble");
      var image1 = document.getElementById("joleneGame");
      var image2 = document.getElementById("dollyCloneGame");
      var image3 = document.getElementById("woman1Game");
      var image4 = document.getElementById("woman2Game");
      var image5 = document.getElementById("woman3Game");
      var image6 = document.getElementById("woman4Game");
      var replayBtn = document.getElementById("replay");
      var y = document.getElementById("totalCount")
      var z = document.getElementById("speechBubbleTextEnd");
      bubble.style.display = "block";
      image1.style.display = "none";
      image2.style.display = "none";
      image3.style.display = "none";
      image4.style.display = "none";
      image5.style.display = "none";
      image6.style.display = "none";
      replayBtn.style.display = "block";

      if (y.innerHTML > 0){
        z.innerHTML = "You got my man back from Jolene! You really are a diamond in a rhinestone world! I will always love you!"
      }else {
        z.innerHTML = "Oh no! Jolene ran off with my man! Guess I'm on the lookout for a potential new boyfriend!"
      }
    };
  
    audio.play();
  };
  
  

//hides instructions when game starts

function hideInstructions() {
    var container = document.getElementById("instructions");
    container.style.display = "none";
  }

  //move heads

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

  //hide Jolene when clicked

  const hideJ = document.getElementById("joleneGame");
  hideJ.addEventListener('click', clickJolene);

  function clickJolene(){
  var Jolene = document.getElementById("joleneGame");
  var timing = 5000;
  Jolene.style.display="none";
  setTimeout(function() {
    Jolene.style.display = "block";
  }, timing);

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


// replay button

const replay = document.getElementById("replay");
replay.addEventListener('click', reload);

container.style.display = "block";
function reload() {
  document.location.reload()
}

// const replay = document.getElementById("replay");
// replay.addEventListener('click', instructionsAgain);


// function instructionsAgain() {
//   container.style.display = "block";
// }

   