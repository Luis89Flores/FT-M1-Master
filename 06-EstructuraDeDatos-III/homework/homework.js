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
function BinarySearchTree() {
   this.root = null;
   this._length = 0;
   this.arr = [];
}

function Node(value){
   this.value = value;
   this.left = null;// apunta a izquierda del nodo
   this.right = null;// apunta a derecha del nodo
}

BinarySearchTree.prototype.size = function(){
   return this._length;
}

BinarySearchTree.prototype.insert = function(value){
   var newNode = new Node(value);
   if (!this.root) {
      this.root = newNode;
      this._length++;
      return this;
   } else {
      if(value < this.root){// si el nodo es menor mira a la izquierda
         if(this.left){//si tiene un nodo a la izquierda
            this.left.insert(value);
         } else {//si no tiene nodo a la izquierda
            this.left = newNode;
            this._length++;
         }
      } else {// si el nodo es mayor mira a la derecha
         if(this.right){//si tiene un nodo a la derecha
            this.right.insert(value);
         } else {
            this.right = newNode;
            this._length++;
         }
      }
   }
}

BinarySearchTree.prototype.contains = function(){
   
}

BinarySearchTree.prototype.depthFirstForEach = function(parameter, value){
   if(parameter === 'post-order'){// POST-ORDER => I - D - A
      this.left.depthFirstForEach(parameter,value);
      this.right.depthFirstForEach(parameter,value);
      this.depthFirstForEach(parameter,value);
   } else if(parameter === 'pre-order'){// PRE-ORDER => A - I - D
      this.depthFirstForEach(parameter,value);
      this.left.depthFirstForEach(parameter,value);
      this.right.depthFirstForEach(parameter,value);
   } else {// IN-ORDER => I - A - D
      this.left.depthFirstForEach(parameter,value);
      this.depthFirstForEach(parameter,value);
      this.right.depthFirstForEach(parameter,value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(value){
   
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
