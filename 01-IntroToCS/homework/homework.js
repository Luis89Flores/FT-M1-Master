'use strict';

function BinarioADecimal(num) {
   //1 0 1 0 1

   /*
   1 * (2 ** 0) = 1
   0 * (2 ** 1) = 0
   1 * (2 ** 2) = 4
   0 * 2 ** 3 = 0
   1 * 2 ** 4 = 16
   ------------------
                21
   */
  
   let decimal = 0,
             i = 0,
             resto;
    while (num !== 0) {// mientras se cumpla
      resto = num % 10;// se extrae el residuo de num
      num = Number.parseInt(num / 10);// se divide num entre 10 y se guarda el resultado en num
      decimal = decimal + resto * Math.pow(2, i);// se multiplica el residuo por el valor de 2 elevado a la potencia de i y se concatena con decimal
      ++i;
    }
   return decimal;

}

function DecimalABinario(num) {
// 21
/*
21 / 2 = 10 => R  1
10 / 2 =  5 => R  0
 5 / 2 =  2 => R  1
 2 / 2 =  1 => R  0
 1 / 2 =  0 => R  1
*/
   let binary = (num % 2).toString();// se obtiene el residuo del numero decimal --> num 

    while ( num > 1 ) { // mientras el num sea mayor que 1 se ejecuta el while
      num = parseInt(num / 2);// se divide num entre 2 y se guarda el resultado en num
      binary = (num % 2) + binary; // se extrae el residuo de num y se concatena con binary, despues se guarda en la variable binary
    }
   return binary;

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
