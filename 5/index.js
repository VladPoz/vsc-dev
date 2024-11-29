const player_1 = document.querySelector('.player_1');
const player_2 = document.querySelector('.player_2');
const ball = document.querySelector('.ball');
let player1Y = 0;
let player2Y = 0;
let step = 30;
let limit = 240;

function player_move_up(player, playerY){
    
    if(playerY == 1){
        if(player1Y > -limit){
            player1Y -= step
            playerY = player1Y
            console.log(player1Y)
        } else {
            return
        }
    } 
    if(playerY == 2){
        if(player2Y > -limit){
            player2Y -= step
            playerY = player2Y
            console.log(player2Y)
        } else {
            return
        }
    }
    player.style.transform = `translateY(${playerY}px)`
}

function player_move_down(player, playerY){
    if(playerY == 1){
        if(player1Y < limit){
            player1Y += step
            playerY = player1Y
        } else {
            return
        }
     
    } else {
        player2Y += step
        playerY  = player2Y
    }
    player.style.transform = `translateY(${playerY}px)`
}

const arrows = {
    'KeyW': () => player_move_up(player_1, 1),
    'KeyS': () => player_move_down(player_1, 1),
    'ArrowUp': () => player_move_up(player_2, 2),
    'ArrowDown': () => player_move_down(player_2, 2),
}

document.addEventListener('keydown', (event) => {
    console.log(event.code);
    
    if (arrows[event.code]) {
        arrows[event.code](); 
    }
});



