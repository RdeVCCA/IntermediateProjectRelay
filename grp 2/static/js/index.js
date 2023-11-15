while (True){ //enemy will move towards player
    var position_x = document.getElementById("player").style.left
    var position_y = document.getElementById("player").style.top
    var emy_x = document.getElementById("enemy").style.left 
    var emy_x = document.getElementById("enemy").style.top 
    if (position_x < emy_x){
        document.getElementById("player").style.left -= 1
    } elseif (position_x > emy_x){
        document.getElementById("player").style.left += 1
    }
    if (position_y < emy_y){
        document.getElementById("player").style.top -= 1
    } elseif (position_y > emy_y){
        document.getElementById("player").style.top += 1
    }
    if ((position_x - enemy_x) < 10 || (enemy_x - position_x) < 10){
        player_hp -= 1
    }
}