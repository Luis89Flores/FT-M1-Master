'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var arr = [];
  let divisor = 2;
  if(typeof num === 'number' && Number.isInteger(num)){
    //if(num > 0){
      arr.push(1)
      while (num > 1) {
        
        if(num % divisor === 0){
          arr.push(divisor);
          num = num / divisor;
        } else {
          divisor++;
        }
      }

      return arr;
    //} else {
      //return null;
    //}
  } else {
    throw TypeError('El argumento num debe ser un numero entero.')
  }
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let interruptor = true;
  while (interruptor) {
    interruptor = false;
    for(let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let inicial = array[j];
        array[j] = array[j + 1];
        array[j + 1] = inicial;
        interruptor = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
//console.log(Math.max(...arr))
  let i, key, j;  
  for (i = 1; i < array.length; i++) {  
    key = array[i]; // key inicia con el 2do elemento del arr
    j = i - 1;  // j inicia en 0 ya que i inicia en 1
    //console.log(key)
    //console.log(j)
    /* Se mueven los elementos del array[0..i-1], que son mayor que key, a una posición por delante
    de su posición actual */
    while (j >= 0 && array[j] > key) //Mientras j sea mayor o igual a 0 y array[j] mayor a key se ejecuta.
    {  
      array[j + 1] = array[j];  //Intercambiamos de posicion array[j] por array[j + 1]
        j = j - 1;  // a j le quitamos 1 para que no se vuelva a ejecutar el while
    }  
    array[j + 1] = key;  // array[j + 1] va a ser igual al valor de key
  }  

  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
//  0   1   2   3   4   5
  //[2, 25, 12, 22, 11, 1]
  for(let i = 0; i < array.length; i++){
    let min = i; // declaramos min y guardamos la 1ra posicion
    for(let j = i+1; j < array.length; j++){// iniciamos j en una posicion por adelante de i --> j = i+1
        if(array[j] < array[min]){// si array[j] es menor array[min] se intercambia el numero de posicion del arreglo
            min=j; // min guarda la posicion de j, ya que array[j] es menor a array[min]
        }
     }
    if (min !== i){// si min es diferente de igual a i, se hace el intercambio de valores 
        let temporal = array[i];// se guarda array[i] en una variable temporal
        array[i] = array[min];// se intercambian los valores en el arreglo
        array[min] = temporal;// se asigna a array[min] el valor guardado en temporal
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
