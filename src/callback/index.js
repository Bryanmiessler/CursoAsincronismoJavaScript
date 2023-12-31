function sum(num1, num2) {
  return num1 + num2;
}

function rest(num1, num2) {
  return num1 - num2;
}

function mult(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
};

console.log(calc(2,2,sum));
console.log(calc(2,2,rest));
console.log(calc(2,2,mult));
console.log(calc(2,2,div));


// funcion anonima

setTimeout(function () {
  console.log("Hola mundo")
},5000)

//funcion

function saludar(name, lastName) {
  return console.log(`Hola ${name} ${lastName}, ¿bien o no?`);
}

setTimeout(saludar, 5000, "Bryan", "Murillo");