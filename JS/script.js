// 1. Deposit some money
// 2. Determine number of line on bet
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5.Check if the user has lost
// 6.Give the user their money 
// 7. Play again


// to collect the deposit we will use function

//OLD WAY

// function deposit(){
// return 1;
// }

const prompt = require("prompt-sync")();
// ES6 WAY 

const deposit = () => {
  const depositAmount= prompt("Enter a deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

}

deposit();