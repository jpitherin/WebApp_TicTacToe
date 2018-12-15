// Initialize
var Turn = 0;
console.log("INIT Turn Count: ");
console.log(Turn);

// Turn counter display
var TurnDisplay = document.getElementById("TurnDisplay");
TurnDisplay.innerHTML = Turn

// Turn counter updated by box click
var Box1 = document.getElementById("Box1");
Box1.addEventListener("click", TurnCounter);

var Box2 = document.getElementById("Box2");
Box2.addEventListener("click", TurnCounter);

var Box3 = document.getElementById("Box3");
Box3.addEventListener("click", TurnCounter);

var Box4 = document.getElementById("Box4");
Box4.addEventListener("click", TurnCounter);

var Box5 = document.getElementById("Box5");
Box5.addEventListener("click", TurnCounter);

var Box6 = document.getElementById("Box6");
Box6.addEventListener("click", TurnCounter);

var Box7 = document.getElementById("Box7");
Box7.addEventListener("click", TurnCounter);

var Box8 = document.getElementById("Box8");
Box8.addEventListener("click", TurnCounter);

var Box9 = document.getElementById("Box9");
Box9.addEventListener("click", TurnCounter);

function TurnCounter(){
  console.log("OLD Turn Count: ");
  console.log(Turn);
  Turn = Turn + 1;
  console.log("NEW Turn Count: ");
  console.log(Turn);
  TurnDisplay.innerHTML = Turn;
}

// Turn counter reset
var reset = document.getElementById("Reset");
reset.addEventListener("click", resetbutton)
  
function resetbutton(){ 
  Turn = 0;
  //console.log("RESET Turn Count: ");
  //console.log(Turn)
  TurnDisplay.innerHTML = Turn
}

// Icon is picked on click