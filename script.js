var current_player = 1;
var track = [];
var used_pos = [];
var move_count = 0;

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
      current_player = 2;
      autoPilot();
  }
  else if(current_player === 2) {
    move.innerHTML = "O";
    move.disabled = "true";
    current_player = 1;
  }
  move_count = move_count + 1;
}

var autoPilot = function() {
  var newPos = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
  alert("Initial:"+newPos)
  while(true) {
    if((used_pos.indexOf(newPos) >= 0)&&(track.length != 9)) {
      newPos = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      alert("After Change:"+newPos);
    }
    else {
      break;
    }
  }
  alert("Before Update:"+newPos)
  map(newPos);
}

/*var win = [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[3,5,7]];

win.forEach(function(subWin){
  subWin.forEach(function(x){
    var pos = document.querySelector(".area_"+x);
  });
});
*/
