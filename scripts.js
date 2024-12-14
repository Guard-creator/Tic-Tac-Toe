function renderTicTacToe() {

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

}

document.querySelector('.js-play-friend')
  .addEventListener('click', () => {

    document.querySelector('.main-page').innerHTML = '';
    renderTicTacToe();

  })

document.querySelector('.js-play-robot')
  .addEventListener('click', () => {

    document.querySelector('.main-page').innerHTML = '';
    renderTicTacToe();

  })