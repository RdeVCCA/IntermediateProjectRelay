var player = document.getElementByIdName('player')
function moveUp() {
    player.style.top = (parseInt(player.style.top) - step) + 'px'
    ;
}

function moveLeft() {
    player.style.left = (parseInt(player.style.left) - step) + 'px';
}

function moveDown() {
    player.style.top = (parseInt(player.style.top) + step) + 'px';
}

function moveRight() {
     player.style.left = (parseInt(player.style.left) + step) + 'px';
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':
            moveUp();
            break;
        case 'a':
            moveLeft();
            break;
        case 's':
            moveDown();
            break;
        case 'd':
            moveRight();
            break;
    }
});

