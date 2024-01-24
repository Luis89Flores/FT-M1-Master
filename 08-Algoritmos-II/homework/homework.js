'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if(array.length <= 1) return array;

  let pivot = array.shift();
  let izq = [];
  let der = [];

  for (let i = 0; i < array.length; i++) {
      if(array[i] < pivot){
        izq.push(array[i])
      } else {
        der.push(array[i])
      }
  }

  return quickSort(izq).concat(pivot).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //okey probemos ahora
  if(array.length <= 1) return array;
  let arrayDividido = dividir(array);
  let mitad1 = arrayDividido[0];
  let mitad2 = arrayDividido[1];

  return merge(mergeSort(mitad1),mergeSort(mitad2));
}

function dividir(array){
  let mitad = Math.floor(array.length / 2);
  let arr1 =  array.slice(0, mitad);
  let arr2 = array.slice(mitad);
  
  return [arr1, arr2];
}

function merge(arr1,arr2){
  let i = 0;
  let j = 0;
  let aux = [];
  while (i < arr1.length && j < arr2.length) {
    if(arr1[i]<arr2[j]){
      aux.push(arr1[i]);
      i++;
    } else {
      aux.push(arr2[j]);
      j++;
    }
  }

  return aux.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
