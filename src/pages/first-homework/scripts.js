// #1 assignment

let age, firstName, lastName, user;

age = +prompt("How old are you?: ", 18);
firstName = prompt("What's your name?: ");
lastName = prompt("What's your last name?: ");


user = {
  age,
  firstName,
  lastName,
}

console.log(user);