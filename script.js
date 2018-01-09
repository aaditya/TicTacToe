var current_player = 1;
var track = [];
var used_pos = [];
var move_count = 0;
var status = 0;
var moves = {
  "p1":[],
  "p2":[]
};

var win = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9][1,5,9],[3,5,7]];

var map = function(x) {
  var move = document.querySelector(".area_"+x);
  var move_info = {
    "pos":x,
    "player":current_player
  };
  track.push(move_info);
  used_pos.push(x);
  if(current_player === 1) {
      move.innerHTML = "X";
      move.disabled = "true";
      moves.p1.push(x);
      current_player = 2;
      autoPilot();
  }
  else if(current_player === 2) {
    move.innerHTML = "O";
    move.disabled = true;
    moves.p2.push(x);
    current_player = 1;
  }
  move_count = move_count + 1;
  forecast();
}

var autoPilot = function() {
  var newPos = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  while(true) {
    if((used_pos.indexOf(newPos) >= 0)&&(track.length != 9)) {
      newPos = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
    }
    else {
      break;
    }
  }
  if(move_count<8) {
    map(newPos);
  }
}

var forecast = function() {
  win.forEach(function(y) {

  });
}

function eqArr(a1,a2) {
    return JSON.stringify(a1)==JSON.stringify(a2);
}

var victory = function(x) {
  alert("Player "+x+" wins !");
  reset();
}

var reset = function() {
  var current_player = 1;
  var track = [];
  var used_pos = [];
  var move_count = 0;
  var status = 0;
  var moves = {
    "p1":[],
    "p2":[]
  };
  for(let i=1;i<=9;i++) {
    var move = document.querySelector(".area_"+i);
    move.innerHTML = "";
    move.disabled = false;
  }
}
