function renderTicTacToe(robotPlay) {

      let html = `

      <h2>Tic Tac Toe</h2>

      <div class="cell-container">

        <div cellIndex="0" class="cell"></div>
        <div cellIndex="1" class="cell"></div>
        <div cellIndex="2" class="cell"></div>
        <div cellIndex="3" class="cell"></div>
        <div cellIndex="4" class="cell"></div>
        <div cellIndex="5" class="cell"></div>
        <div cellIndex="6" class="cell"></div>
        <div cellIndex="7" class="cell"></div>
        <div cellIndex="8" class="cell"></div>

      </div>

      <div class="status-bar"></div>

      <div class="score-status"></div>

      <button class="restart-button">Restart</button>
      <button class="change-player js-change-player">Change Player</button>

    `;

    document.querySelector('.js-tic-tac-toe')
    .innerHTML = html;

    const cells = document.querySelectorAll('.cell');
    const statusText = document.querySelector('.status-bar');
    const restartbutton = document.querySelector('.restart-button');
    const scorestatus = document.querySelector('.score-status');
    const changingplayer = document.querySelector('.js-change-player');

    const winningCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    let options = ['', '', '', '', '', '', '', '', '',];
    let currentPlayer = 'X';
    let runningGame = false;

    let score = {
      X: 0,
      O: 0,
      Draw: 0,
    }

    startingGame();

    function startingGame() {

      cells.forEach(cell => cell.addEventListener('click', cellClicked));
      statusText.textContent = `${currentPlayer}'s turn`;
      scorestatus.textContent = `X: ${score.X}, O: ${score.O} Draw: ${score.Draw}`;
      restartbutton.addEventListener('click', restartbtn);
      changingplayer.addEventListener('click', changePlayer)
      runningGame = true;

    }

    function cellClicked() {

      const cellIndex = this.getAttribute('cellIndex');

      if(options[cellIndex] !== '' || !runningGame) {
        return;
      }

      updateCell(this, cellIndex);
      checkWinner();
    
      
      if(runningGame && robotPlay === 'playWithRobot') {
        setTimeout(robotMove, 500);
      }
      

    }

    function updateCell(cell, cellIndex) {

      options[cellIndex] = currentPlayer;
      cell.textContent = currentPlayer;

    }

    function changePlayer() {

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusText.textContent = `${currentPlayer}'s turn`;

    }

    function checkWinner() {

      let roundWon = false;

      winningCondition.forEach(conditon => {

        const cellA = options[conditon[0]];
        const cellB = options[conditon[1]];
        const cellC = options[conditon[2]];

        if(cellA === '' || cellB === '' || cellC === '') {
          return;
        }

        if(cellA === cellB && cellB === cellC) {
          roundWon = true;
          return;
        } 

      })

      if(roundWon) {
        statusText.textContent = `${currentPlayer}'s Wins!`;
        updateScore('Win');
        runningGame = false;
      } else if (!options.includes('')) {
        statusText.textContent = `Draw`;
        updateScore('Draw');
        runningGame = false;
      } else {
        changePlayer();
      }

    }

    function restartbtn() {

      options = ['', '', '', '', '', '', '', '', '',];
      currentPlayer = 'X';
      statusText.textContent = `${currentPlayer}'s turn`;
      cells.forEach(cell => cell.textContent = '');
      runningGame = true;

    }

    function robotMove() {
      if (!runningGame) return;

      const emptyCells = options
        .map((val, index) => (val === '' ? index : null))
        .filter(index => index !== null);

      if (emptyCells.length === 0) return;

      const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      const cell = cells[randomIndex];

      updateCell(cell, randomIndex);
      checkWinner();
    }

    function updateScore(result) {

      if(result === 'Win') {
        
        if(currentPlayer  === 'X') {
          score.X++;
        } else if (currentPlayer === 'O') {
          score.O++;
        }

      } else if(result === 'Draw') {
        score.Draw++;
      }

      scorestatus.textContent = `X: ${score.X}, O: ${score.O} Draw: ${score.Draw}`;
    
    }

}

document.querySelector('.js-play-friend')
  .addEventListener('click', () => {

    document.querySelector('.main-page').innerHTML = '';
    renderTicTacToe();

  })

document.querySelector('.js-play-robot')
  .addEventListener('click', () => {

    document.querySelector('.main-page').innerHTML = '';
    renderTicTacToe('playWithRobot');

  })