'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;// apunta a izquierda del nodo
   this.right = null;// apunta a derecha del nodo
}

BinarySearchTree.prototype.size = function(){
   if(this.left === null && this.right === null) return 1;
   if(this.left && !this.right){
      return 1 + this.left.size();
   }
   if(this.right && !this.left){
      return 1 + this.right.size();
   }
   if(this.left && this.right){
      return 1 + this.left.size() + this.right.size();
   }

}

BinarySearchTree.prototype.insert = function(value){
   var newNode = new BinarySearchTree(value);
   
   if(value < this.value){// si el nodo es menor mira a la izquierda
      if(this.left){//si tiene un nodo a la izquierda
         this.left.insert(value);
      } else {//si no tiene nodo a la izquierda
         this.left = newNode;
      }
   } else {// si el nodo es mayor mira a la derecha
      if(this.right){//si tiene un nodo a la derecha
         this.right.insert(value);
      } else {
         this.right = newNode;
      }
   }
   
}

BinarySearchTree.prototype.contains = function(value){

   if(this.value === value){
      return true;
   }
   if(value < this.value){
      if(this.left){
         return this.left.contains(value);
      } else {
         return false
      }
   } else {
      if(this.right){
         return this.right.contains(value);
      }else {
         return false;
      }
   }   
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){
   if(order === 'post-order'){// POST-ORDER => I - D - A
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order);
      cb(this.value)
   } else if(order === 'pre-order'){// PRE-ORDER => A - I - D
      cb(this.value)
      if(this.left) this.left.depthFirstForEach(cb,order);
      if(this.right) this.right.depthFirstForEach(cb,order);
   } else {// IN-ORDER => I - A - D
      if(this.left) this.left.depthFirstForEach(cb,order);
      cb(this.value)
      if(this.right) this.right.depthFirstForEach(cb,order);  
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
   // Asignamos el valor actual a la callback
   cb(this.value)
   //Preguntamos si el nodo de la izquierda tiene hijos, si es asi lo guardamos en un arreglo, despues preguntamos si el nodo de la derecha tiene hijos
   this.left && arr.push(this.left);
   this.right && arr.push(this.right);
   //Si el arreglo es mayor a 0, sacamos el primer valor del arreglo, luego ejecutamos la funcion y pasamos parametros la callback y arreglo
   if(arr.length) arr.shift().breadthFirstForEach(cb,arr);
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
