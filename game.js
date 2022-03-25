/* TODO implement game logic here */
window.onload = function () {
    let labyrinth = new Labyrinth();
    labyrinth.printConsole();
    labyrinth.printDisplay('map');
    document.addEventListener('keydown', function (event) {
        if (event.defaultPrevented) {
            return;
        }
        switch (event.key) {
            case "Down": // IE/Edge specific value
            case "ArrowDown":
                if (labyrinth.playerPos.y + 1 < labyrinth.height && labyrinth.map[labyrinth.playerPos.y + 1][labyrinth.playerPos.x] == 0) {
                    labyrinth.playerPos.y += 1;
                    labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
                }
              break;
            case "Up": // IE/Edge specific value
            case "ArrowUp":
                if (labyrinth.playerPos.y - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y - 1][labyrinth.playerPos.x] == 0) {
                    labyrinth.playerPos.y -= 1;
                    labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
                }
              break;
            case "Left": // IE/Edge specific value
            case "ArrowLeft":
                if (labyrinth.playerPos.x - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x - 1] == 0) {
                    labyrinth.playerPos.x -= 1;
                    labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
                }
              break;
            case "Right": // IE/Edge specific value
            case "ArrowRight":
                if (labyrinth.playerPos.x + 1 < labyrinth.width && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x + 1] == 0) {
                    labyrinth.playerPos.x += 1;
                    labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
                }
              break;
            default:
              return; // Quit when this doesn't handle the key event.
          }
        
        event.preventDefault();
      
        if (labyrinth.playerPos.x == labyrinth.end.x && labyrinth.playerPos.y == labyrinth.end.y) {
            alert("Congratulations!");
        }
    });
}