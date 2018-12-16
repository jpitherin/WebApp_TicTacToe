// Initialize Turn Counts
var Turn = 0;
var humanplayer = document.getElementById("human-player");
var botplayer = document.getElementById("bot-player");
humanplayer.className = 'player-img-select'
botplayer.className = 'player-img-deselect'

// Initialize Score
var win = "False";

// Initialize Empty Board
var Box1 = document.getElementById("Box1");
var Box1Contents = "None"
var Box2 = document.getElementById("Box2");
var Box2Contents = "None"
var Box3 = document.getElementById("Box3");
var Box3Contents = "None"
var Box4 = document.getElementById("Box4");
var Box4Contents = "None"
var Box5 = document.getElementById("Box5");
var Box5Contents = "None"
var Box6 = document.getElementById("Box6");
var Box6Contents = "None"
var Box7 = document.getElementById("Box7");
var Box7Contents = "None"
var Box8 = document.getElementById("Box8");
var Box8Contents = "None"
var Box9 = document.getElementById("Box9");
var Box9Contents = "None"

// Turn counter display
var TurnDisplay = document.getElementById("TurnDisplay");
TurnDisplay.innerHTML = Turn

// Turn play
Box1.addEventListener("click",() => {
  // Increase turn count
  if (Box1Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box1Contents = TurnPlay(Box1, Box1Contents)  
  
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box1Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }

});
                      
Box2.addEventListener("click",() => {
  // Increase turn count
  if (Box2Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box2Contents = TurnPlay(Box2, Box2Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box2Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box3.addEventListener("click",() => {
  // Increase turn count
  if (Box3Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box3Contents = TurnPlay(Box3, Box3Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box3Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box4.addEventListener("click",() => {
  // Increase turn count
  if (Box4Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box4Contents = TurnPlay(Box4, Box4Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box4Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box5.addEventListener("click",() => {
  // Increase turn count
  if (Box5Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box5Contents = TurnPlay(Box5, Box5Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box5Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box6.addEventListener("click",() => {
  // Increase turn count
  if (Box6Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box6Contents = TurnPlay(Box6, Box6Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box6Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box7.addEventListener("click",() => {
  // Increase turn count
  if (Box7Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box7Contents = TurnPlay(Box7, Box7Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box7Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box8.addEventListener("click",() => {
  // Increase turn count
  if (Box8Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box8Contents = TurnPlay(Box8, Box8Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box8Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});

Box9.addEventListener("click",() => {
  // Increase turn count
  if (Box9Contents == "None") {
    TurnCounter();
  }
  // Place a marker
  Box9Contents = TurnPlay(Box9, Box9Contents)
    
  // Check win conditions
  win = CheckWin()
  
  if (win == "True") {
    WinEvent(Box9Contents)
  }
  if (win == "False" && Turn % 2 == 1) {
    // Bot's turn
    BotPlay();
  }
  
});



//Turn Functions
function TurnCounter(){
  // Increase Count
  Turn = Turn + 1;
  TurnDisplay.innerHTML = Turn;
}

function TurnPlay(Box, BoxContents) {
  
  if (BoxContents == "None") {

    // Place a marker
    if (Turn % 2 == 1) { // odd, Human
      ShowHuman(Box);
      BoxContents = "Human"
      
      // Highlight next player icon
      humanplayer.className = 'player-img-deselect'
      botplayer.className = 'player-img-select'
      
      return BoxContents;
    }
    else { // even, Bot
      ShowBot(Box);
      BoxContents = "Bot";
      
      // Highlight next player icon
      humanplayer.className = 'player-img-select'
      botplayer.className = 'player-img-deselect'
      
      return BoxContents;
    }  
  }
  else {
    return BoxContents;
  }
};

function CheckWin() {
  var WinCheck = "False";
  
  // Rows
  if ((Box1Contents == "Human" && Box2Contents == "Human" && Box3Contents == "Human")
      ||(Box1Contents == "Bot" && Box2Contents == "Bot" && Box3Contents == "Bot")){
    WinCheck = "True";
    return WinCheck;
  }
  if ((Box4Contents == "Human" && Box5Contents == "Human" && Box6Contents == "Human")
        ||(Box4Contents == "Bot" && Box5Contents == "Bot" && Box6Contents == "Bot")){
      WinCheck = "True";
      return WinCheck;
  }
  if ((Box7Contents == "Human" && Box8Contents == "Human" && Box9Contents == "Human")
        ||(Box7Contents == "Bot" && Box8Contents == "Bot" && Box9Contents == "Bot")){
      WinCheck = "True";
      return WinCheck;
  }
  
  // Columns
  if ((Box1Contents == "Human" && Box4Contents == "Human" && Box7Contents == "Human")
      ||(Box1Contents == "Bot" && Box4Contents == "Bot" && Box7Contents == "Bot")){
    WinCheck = "True";
    return WinCheck;
  }
  if ((Box2Contents == "Human" && Box5Contents == "Human" && Box8Contents == "Human")
        ||(Box2Contents == "Bot" && Box5Contents == "Bot" && Box8Contents == "Bot")){
      WinCheck = "True";
      return WinCheck;
  }
  if ((Box3Contents == "Human" && Box6Contents == "Human" && Box9Contents == "Human")
      ||(Box3Contents == "Bot" && Box6Contents == "Bot" && Box9Contents == "Bot")){
    WinCheck = "True";
      return WinCheck;
  }
  
  // Diagonals
  if ((Box1Contents == "Human" && Box5Contents == "Human" && Box9Contents == "Human")
        ||(Box1Contents == "Bot" && Box5Contents == "Bot" && Box9Contents == "Bot")){
      WinCheck = "True";
      return WinCheck;
  }
  if ((Box3Contents == "Human" && Box5Contents == "Human" && Box7Contents == "Human")
      ||(Box3Contents == "Bot" && Box5Contents == "Bot" && Box7Contents == "Bot")){
    WinCheck = "True";
      return WinCheck;
  }
  
  
  // No win
  else {
    return WinCheck;
  }
  
}


// Turn counter reset
var reset = document.getElementById("Reset");
reset.addEventListener("click", resetbutton);
  
function resetbutton(){ 
  // Reset Turns
  Turn = 0;
  TurnDisplay.innerHTML = Turn
  
  //Reset Player Icons
  humanplayer.className = 'player-img-select'
  botplayer.className = 'player-img-deselect'
  
  // Reset Images
  Box1.innerHTML = ""
  Box2.innerHTML = ""
  Box3.innerHTML = ""
  Box4.innerHTML = ""
  Box5.innerHTML = ""
  Box6.innerHTML = ""
  Box7.innerHTML = ""
  Box8.innerHTML = ""
  Box9.innerHTML = ""
  
  // Reset BoxContents
  Box1Contents = "None"
  Box2Contents = "None"
  Box3Contents = "None"
  Box4Contents = "None"
  Box5Contents = "None"
  Box6Contents = "None"
  Box7Contents = "None"
  Box8Contents = "None"
  Box9Contents = "None"
}

// Icon is picked on click

function ShowBot(Box) {
    Box.innerHTML = "<img src='https://png2.kisspng.com/sh/b66b0369429cdd316fd87cf648a4afe7/L0KzQYm3VsE0N5p0fpH0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TflvfJZ3htd9LXLyhH75jBJwfF5ohNt5LXH1hH7ojvdzgV5yhAZxZYKwRbO5Uck6O5M8ethtOUaxR4i7V8k6QGI2TaQDOUK7RYi4VcA4QV91htk=/kisspng-computer-icons-internet-bot-robot-clip-art-angry-mother-5b21993b7bfd96.7747998115289285715079.png' class = 'marker-img-bot'/>"
}
  
function ShowHuman(Box) {
  Box.innerHTML = "<img src='https://png2.kisspng.com/sh/055cf79fca2b2030d69d28bbbe1c0d95/L0KzQYm3VMI2N6pvj5H0aYP2gLBuTfNwdaF6jNd7LXnmf7B6TfJtaZRwRelxaYToPcHsjCBtbV5oitt9aXPkfH7wjPxvbaR4RadqZUC0dbO3U8BmP2Q9Rqk6M0e6Q4eBUcUzPGc4T6UBMEKzQIS1kP5o/kisspng-computer-icons-black-white-people-critical-illness-5ae01eb030e738.7137736815246373602003.png' class = 'marker-img-human'/>"
}

// Bot Play
function BotPlay() {
  var Contents =  [Box1Contents,
                  Box2Contents,
                  Box3Contents,
                  Box4Contents,
                  Box5Contents,
                  Box6Contents,
                  Box7Contents,
                  Box8Contents,
                  Box9Contents];
  var Choices = [];
  
  // Array of free squares
  for (i = 0; i < Contents.length; i++){
    if (Contents[i] == "None")
    Choices.push(i+1);
  }
  
  //console.log("Contents:")
  //console.log(Contents)
  
  //console.log("Choices:")
  //console.log(Choices);
  
  // Choose a free square
  var random = Math.floor(Math.random() * 100);  
  var number = random % Choices.length
  var square = Choices[number]
  
  //console.log("Chosen square:")
  //console.log(square);
  
  if (square == 1) {
    // Increase turn count
    if (Box1Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box1Contents = TurnPlay(Box1, Box1Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box1Contents)
    }
  };
  if (square == 2) {
    // Increase turn count
    if (Box2Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box2Contents = TurnPlay(Box2, Box2Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box2Contents)
    }
  };
  if (square == 3) {
    // Increase turn count
    if (Box3Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box3Contents = TurnPlay(Box3, Box3Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box3Contents)
    }
  };
  if (square == 4) {
    // Increase turn count
    if (Box4Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box4Contents = TurnPlay(Box4, Box4Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box4Contents)
    }
  };
  if (square == 5) {
    // Increase turn count
    if (Box5Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box5Contents = TurnPlay(Box5, Box5Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box5Contents)
    }
  };
  if (square == 6) {
    // Increase turn count
    if (Box6Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box6Contents = TurnPlay(Box6, Box6Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box6Contents)
    }
  };
  if (square == 7) {
    // Increase turn count
    if (Box7Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box7Contents = TurnPlay(Box7, Box7Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box7Contents)
    }
  };
  if (square == 8) {
    // Increase turn count
    if (Box8Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box8Contents = TurnPlay(Box8, Box8Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box8Contents)
    }
  };
  if (square == 9) {
    // Increase turn count
    if (Box9Contents == "None") {
      TurnCounter();
    }
    // Place a marker
    Box9Contents = TurnPlay(Box9, Box9Contents)

    // Check win conditions
    win = CheckWin()

    if (win == "True") {
      WinEvent(Box9Contents)
    }
  };

}


// Win Event
function WinEvent(winner) {
  console.log("WINNER!!!")
  console.log(winner)
  
  if (winner == 'Human'){
    humanplayer.className = 'player-img-select'
    botplayer.className = 'player-img-deselect'
    
    TurnDisplay.innerHTML = "Human wins!"
  }
  else {
    humanplayer.className = 'player-img-deselect'
    botplayer.className = 'player-img-select'
    
    TurnDisplay.innerHTML = "Bot wins!"
  }
};
