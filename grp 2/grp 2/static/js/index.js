function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function makeEnemy() {
  let node = document.getElementById("enemy-base").cloneNode();
  node.style.display = "block";
  node.style.top = `${randint(0, 1000)}%`;
  node.style.left = `${randint(0, 1000)}%`;
  document.getElementById("body").appendChild(node);
}

for (let i = 0; i < 100; i++) { makeEnemy(); }

var movableDiv = document.getElementById('player');
var step = 10; // Adjust the step size as needed

while (true){ //enemy will move towards player
    let position_x = document.getElementById("player").style.left + document.getElementById("player").style.width / 2;
    let position_y = document.getElementById("player").style.top + document.getElementById('player').style.height / 2;
    let emy_x = document.getElementById("enemy").style.left + document.getElementById('enemy-base').style.width / 2;
    let emy_y = document.getElementById("enemy").style.top + + document.getElementById('enemy-base').style.height / 2;
    
    //gun position
    let gun_x = document.getElementById("gun").style.left + document.getElementById('gun').style.width
    
    gun_x = document.getElementById("player").style.left
  
    if (position_x < emy_x){
        document.getElementById("enemy-base").style.left -= 1
    } else if (position_x > emy_x){
        document.getElementById("enemy-base").style.left += 1
    }
    if (position_y < emy_y){
        document.getElementById('enemy-base').style.top -= 1
    } else if (position_y > emy_y){
        document.getElementById("enemy-base").style.top += 1
    }
    if (((position_x - enemy_x) < 10 || (enemy_x - position_x) < 10) &&  ((position_y - enemy_y) < 10 || (enemy_y - position_y) < 10)){
        player_hp -= 1
    }
  
}