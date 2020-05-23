// #2a assignment
function giveNumber() {

  let num = +prompt("Write a number from 1 to 10: "),
    i = 0;
  if (num < 1) {
    alert(`${num} is less than 1. Please try again`);
    giveNumber();
  } else if (num > 10) {
    alert(`${num} is bigger than 10. Please try again`);
    giveNumber();
  } else if (Number.isNaN(num)) {
    alert(`It is not a number. Try again!`);
    giveNumber();
  } else {
    for (i = 0; i <= num; i++){
      if (i % 4) {
        console.log(i);
      }
    }
  }
}

giveNumber();

// #2b assignment
function count() {
  
  let timerId = setInterval(function() {
    if (number >= 0) {
      number += 3;
      console.log(number);
    }
  }, 3000);
  
  setTimeout(function () {
    clearInterval(timerId);
    alert("Programm is over")
  }, 9000)
}

let number = 0;

count();