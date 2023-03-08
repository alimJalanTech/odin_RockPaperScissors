const CHOICES = {
  ROCK: "Rock",
  PAPER: "Paper",
  SCISSORS: "Scissors"
};

// Results of Game [Win,Loss,Draw]
res = [0, 0];

function validateInput(string) {
  return options.includes(string);
}

function playerChoice() {
  const choice = prompt("Enter one of Rock, Paper or Scissors").toLowerCase();
  while (!validateInput(choice)) {
    choice = prompt(
      " Wrong Input:Enter one of Rock, Paper or Scissors"
    ).toLowerCase();
  }
  return choice;
}

// Generates a random index from options as Computer's Choice
function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

// 0 indicates d 1 indicates win and -1 indicates loss
function checkWinner(userChoice, randChoice) {
  if (userChoice === randChoice) {
    return 0;
  } else if (
    (userChoice === CHOICES.ROCK && randChoice == CHOICES.SCISSORS) ||
    (userChoice === CHOICES.PAPER && randChoice == CHOICES.ROCK) ||
    (userChoice === CHOICES.SCISSORS && randChoice == CHOICES.PAPER)
  ) {
    return 1;
  } else {
    return -1;
  }
}

function roundWinner(win) {
  if (win == 1) return "User";
  else if (win == -1) return "Computer";
  return "Draw";
}

function playRound(round) {
  const userSelect = playerChoice();
  const computerSelect = getComputerChoice();
  const winner = checkWinner(userSelect, computerSelect);
  console.log("Round", round, "Winner is", roundWinner(winner));
  if (winner == 1) {
    res[0] += 1;
  } else if (winner == -1) {
    res[1] += 1;
  }
}

// Main Game Function
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(i + 1);
  }
  if (res[0] > res[1]) {
    console.log("User Won the Match");
  } else if (res[1] > res[0]) {
    console.log("Computer Won the Match");
  } else {
    console.log("Match Draw");
  }
}

game();
