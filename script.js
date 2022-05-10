'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('message').textContent = '⛔ No number';
displayMessage('⛔ No number');
    // When player wins the game
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🏆Correct Number!';
    displayMessage('🏆Correct Number!');
    document.querySelector('body').style.backgroundColor = '#34F001';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if ( score > highscore ) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
// //When guess is wrong
  } else if ( guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📈 Too low!' ;
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!' );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '😥 GAME OVER !';
      displayMessage('😥 GAME OVER !');
      document.querySelector('.score').textContent = 0;
    }
  }
/// FORMA LUNGA SCRISA URAT IAR SUS AVEM CODUL CARE FACE ACELASI LUCRU
//     // Guess is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too high!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😥 GAME OVER !';
//       document.querySelector('.score').textContent = 0;
//     }
//     // Guess is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = '📈 Too low!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '😥 GAME OVER !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
});

document.querySelector('.againn').addEventListener('click', function reset () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
displayMessage('Start guessing...');
  // document.querySelector('.message').textContent ='Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent ='?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#900C3F';
  document.querySelector('.number').style.width = '15rem';
});


