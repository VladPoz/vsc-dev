const player_1 = document.querySelector('.player_1');
const player_2 = document.querySelector('.player_2');
const ball = document.querySelector('.ball');

document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyW') {
        console.log(event.code);
        player_1.style.marginBottom = '50px';
    } else if (event.code == 'KeyS') {
        console.log(event.code);
        player_1.style.marginTop += '50px';
    } else if (event.code == 'ArrowUp') {
        console.log(event.code);
        player_2.style.marginBottom = '50px';
    } else if (event.code == 'ArrowDown') {
        console.log(event.code);
        player_2.style.marginTop += '50px';
    }
});

function ball_move(){
    ball.style.marginTop += '100px';
    ball.style.marginRight += '100px';
}

ball_move()