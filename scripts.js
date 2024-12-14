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