let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
while (numeroUsuario != numeroSecreto) {
       numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor: ");

  console.log(numeroUsuario);
  /*este codigo realiza la comparacion*/

  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}. Lohiciste en ${intentos} ${palabraVeces}`);
  } else {
      if (numeroUsuario > numeroSecreto) {
         alert("El numero secreto es menor");
    } else {
         alert("EL numero secreto es mayor");
    }
    //incrementar el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces = 'veces'
    if (intentos > 3) {
        alert('Llegaste al numero maximo de intentos');
        break;
    }
  }
}


