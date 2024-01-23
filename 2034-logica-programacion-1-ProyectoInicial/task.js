// Muestra una alerta con el mensaje "¡Bienvenida y bievenido a nuestro sitio web!"
alert("¡Bienvenida y bievenido a nuestro sitio web!");

// Declara una variable llamada nombre y asígnale el valor "Luna"
var nombre = "Luna";

// Crea una variable llamada edad y asígnale el valor 25
var edad = 25;

// Establece una variable numeroDeVentas y asígnale el valor 50
var numeroDeVentas = 50;

// Establece una variable saldoDisponible y asígnale el valor 1000
var saldoDisponible = 1000;

// Muestra una alerta con el texto "¡Error! Completa todos los campos"
alert("¡Error! Completa todos los campos");

// Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos"
var mensajeDeError = "¡Error! Completa todos los campos";

// Ahora muestra una alerta con el valor de la variable mensajeDeError
alert(mensajeDeError);

// Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre
nombre = prompt("Por favor, ingresa tu nombre");

// Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad
edad = prompt("Por favor, ingresa tu edad");

// Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!"
if (edad >= 18) {
    alert("¡Puedes obtener tu licencia de conducir!");
}

/*Practicar la lógica de programación, incluyendo conceptos como variables, condiciones (if-else), bucles (while) e interacciones con el usuario (alert, prompt), es esencial para tu carrera en el desarrollo de software. Estos fundamentos son la base para abordar problemas de manera estructurada, tomar decisiones sin código, crear bucles controlados e interactuar de manera efectiva con los usuarios.

Comprender estos conceptos no solo facilita el aprendizaje de nuevos lenguajes y tecnologías, sino que también te capacita para crear soluciones innovadoras, depurar de manera eficiente y mantener la calidad a lo largo del ciclo de vida del software. Por lo tanto, invertir tiempo en estos principios desde temprano es fundamental para construir una base sólida y exitosa en el campo de la programación.


1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".
*/
let diaDeLaSemana = prompt("¿Qué día de la semana es?");
if (diaDeLaSemana === "Sábado" || diaDeLaSemana === "Domingo") {
  alert("¡Buen fin de semana!");
} else {
  alert("¡Buena semana!");
}
```
2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
```;
let numero = prompt("Escribe un número positivo o negativo");
if (numero > 0) {
  alert("Número positivo");
} else if (numero < 0) {
  alert("Número negativo");
} else {
  alert("El número es cero");
}
```
3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Enhorabuena, has ganado!". En caso contrario, muestra "Inténtalo de nuevo para ganar."
```;
let puntuacion = 105;
if (puntuacion >= 100) {
  console.log("¡Enhorabuena, has ganado!");
} else {
  console.log("Inténtalo de nuevo para ganar.");
}
```
4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, utilizando un template string para incluir el valor del saldo.
```;
let saldoCuenta = 500; // Ejemplo de saldo
alert(`Tu saldo es de $${saldoCuenta}.`);
```
5. Pide al usuario que ingrese su nombre usando prompt. Luego, muestra una alerta de bienvenida utilizando ese nombre.
```;
let nombre = prompt("Por favor, ingresa tu nombre");
alert(`¡Bienvenido, ${nombre}!`);


// let contador = 1;

// while (contador < 4) {
//   console.log("Ejecutando la iteración " + contador);
//   contador = contador + 1;
// }

// let qtdNumeros = prompt(
//   "Digite la cantidad de números para el cálculo del promedio:"
// );
// let soma = 0;
// let contador = qtdNumeros;

// while (contador > 0) {
//   let numero = parseInt(prompt("Digite el numero:"));

//   soma += numero;
//   contador--;
// }

// let promedio = soma / qtdNumeros;

// console.log(promedio);

// let idad = 25;
// let tieneLicencia = true;

// // si la edad es mayor de 18 y tiene una licencia...
// if (idad > 18 && tieneLicencia) {
//   console.log("Puede conducir!");// si tiene manzana o tiene banama…
// if (tieneManzana|| tieneBanana) {
//   console.log("Tienes frutas!");
// } else {
//   console.log("No tienes frutas.");
// }


// let numeroSecreto = Math.floor(Math.random() * 10);
// for (let intentos = 0; intentos < 5; intentos++) {
//   let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
//   if (intento == numeroSecreto) {
//     alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
//     break;
//   }
// }
// } else {
//   console.log("No puede conducir!");
// }
// // si tiene manzana o tiene banama…
// if (tieneManzana|| tieneBanana) {
//   console.log("Tienes frutas!");
// } else {
//   console.log("No tienes frutas.");
// }


// let numeroSecreto = Math.floor(Math.random() * 10);
// for (let intentos = 0; intentos < 5; intentos++) {
//   let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
//   if (intento == numeroSecreto) {
//     alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
//     break;
//   }
// }

let numeroSecreto = Math.floor(Math.random() * 10);
let intentos = 0;
while (intentos < 5) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  intentos++;
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}