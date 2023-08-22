let maximum = parseInt(prompt("Enter the maximum number: "));

while(!maximum){
  maximum = parseInt(prompt("Enter a valid number: "));
}

const targetNum = Math.floor(Math.random()*maximum) + 1;

let guess = prompt("Enter your first guess! ")
let attempts = 1;

while(parseInt(guess) !== targetNum){
  if (guess === "q") break;
  attempts++;

    (guess > targetNum) ? guess = prompt("Too high! Enter a new guess: ")
  : (guess < targetNum) ? guess = prompt("Too low! Enter a new guess: ")
  : guess = prompt(`Your guess which is ${guess} is not valid. Enter a new guess`)
}

(guess === 'q') ? document.write('OK, YOU QUIT!')
: document.write(`Congrats you win! It took you ${attempts} guesses`);