function clickDolly() {
    var x = document.getElementById("speechBubbleText");
    if (x.innerHTML === "") {
        x.innerHTML = "I need to get something off my chest!";
      } else if (x.innerHTML === "I need to get something off my chest!") {
        x.innerHTML = "It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?";
      } else if (x.innerHTML === "It's this trouble I've been having with this woman Jolene! She keeps trying to steal my man! I've been working 9-5 trying to find her! Can you find her for me?"){
        x.innerHTML = "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!"
      } else if (x.innerHTML === "Her beauty is beyond compare with flaming locks of auburn hair with ivory skin and eyes of emerald green!"){
        x.innerHTML = "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!"
      } else if (x.innerHTML === "I seem to flow right past her like an island in the stream, but I believe you can catch her! Each time you get her you'll get 1 point! But make sure you don't accidentally catch anyone else or else you'll lose a point!")
        x.innerHTML = "And you REALLY don't want to catch my clone! Then you'll lose all your points!"
        else if (x.innerHTML === "And you REALLY don't want to catch my clone! Then you'll lose all your points!")
        x.innerHTML = "";
    }

    // function getBubble(){
    //     const myBubble = document.getElementById("bubble");
    //      { 
    //        myBubble.style.display = "block"; 
    //     }) 
    // }


   