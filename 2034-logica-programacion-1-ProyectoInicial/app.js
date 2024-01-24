//Variables
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible + 1);
let numeroUsuario = 0;
let intentos = 1;

//let palabraVeces = 'vez';
let maximoIntentos = 3;
while (numeroUsuario != numeroSecreto) {
       numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));

  console.log(numeroUsuario);
  /*este codigo realiza la comparacion*/

  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
     alert(`Acertaste, el número es: ${numeroUsuario}. Lohiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
  }  else {
            if (numeroUsuario > numeroSecreto) {
                alert("El numero secreto es menor");
            } else {
                alert("EL numero secreto es mayor");
            }
            //incrementar el contador cuando no acierta
            // intentos = intentos + 1;
            //intentos += 1;
            intentos++;
            //palabraVeces = 'veces'
            if (intentos > maximoIntentos) {
                alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
                break;
    }
  }
}


