var arbol = function ABB () {
	
	Elemento :
		devuelve_Elemento function()
		return{ function  (_valor){// struct elemento
		//return{
			this.valor = _valor;
			this.hijoIzq= null;
			this.hijoDer= null;
		//};
	}},

	numElementos:0,

	raiz:null,//= new Elemento(),

	push :function(){
		return {
			function (_valor) {

			var aux = this.raiz;

			while(aux !== null && _valor !== aux.valor){

				if(_valor > aux.valor){
					if(aux.hijoDer === null)
						aux.hijoDer = new Elemento(_valor);

					aux= aux.hijoDer;
				}else if(_valor < aux.valor){
					if(aux.hijoIzq === null)
						aux.hijoIzq = new Elemento(_valor);
					aux = aux.hijoIzq
				}

			}

			if(this.raiz=== null){
				this.raiz = new Elemento(_valor);
			}
			this.numElementos++;


	}};,

	pop : function (_valor){
		
			var aux =this.raiz;
			var padre = null;

			while(aux !== null && aux.valor !== _valor){
				padre=aux;
	       		aux= _valor < aux.valor ? aux.hijoIzq : aux.hijoDer;
			}

			if(aux === null ) return false;

			if(aux.hijoIzq===null && aux.hijoDer === null)
	       		padre === null ? this.raiz=null: padre.hijoIzq === aux ? padre.hijoIzq = null : padre.hijoDer = null;

	    	else if (aux.hijoIzq !==null && aux.hijoDer === null)
	    		padre === null ? this.raiz = aux.hijoIzq : padre.hijoIzq == aux ? padre.hijoIzq = aux.hijoIzq : padre.hijoDer = aux.hijoIzq;

	    	else if (aux.hijoIzq === null & aux.hijoDer !==null)
	       		padre === null ? this.raiz = aux.hijoDer : padre.hijoIzq == aux ? padre.hijoIzq = aux.hijoDer :
	                        padre.hijoDer = aux.hijoDer;

			else{

			//var mayor = Object.create(ABB.prototype) 	
			//var mayor = this.BuscarMayor(hijoIzq);
			var mayor = new Elemento(this.BuscarMayor(aux.hijoIzq));

			mayor.hijoDer =  aux.hijoDer;
			padre === null ? this.raiz= aux.hijoIzq : padre.hijoIzq == aux ? padre.hijoIzq = aux.hijoIzq : padre.hijoDer = aux.hijoIzq;


			this.numElementos--;
	    	return true;

	    }                        
	};


	BuscarMayor : function(_raiz){
		
		while(_raiz.hijoDer!== null){
			_raiz= _raiz.hijoDer;

		}
		return _raiz;
	}


	this.ImprimirDescendente = function(){
		if(this.raiz === null )return "No hay elementos";

		ImprimirDescendente (this.raiz);
	}

	//Imprimir Descendente privado
	var ImprimirDescendente = function(_raiz){


		
		if(_raiz!= null){
			ImprimirDescendente(_raiz.hijoDer);
			console.log(_raiz.valor + ", ");
			ImprimirDescendente(_raiz.hijoIzq);
		}


	}
	this.ImprimirAscendente = function(){
		//if(this.numElementos === 0 )return "No hay elementos";
		ImprimirAscendente (this.raiz);
	}

	var ImprimirAscendente = function(_raiz){

		if(_raiz!= null){
			ImprimirAscendente(_raiz.hijoIzq);
			console.log(_raiz.valor + ", ");
			delete _raiz;
			ImprimirAscendente(_raiz.hijoDer);
		}


	}

	this.Vaciar = function(){
		this.raiz=null;
		this.numElementos=0
	}

	this.Buscar = function(_valor){

		var aux = this.raiz;
		while(aux!== null && aux.valor !== _valor){
        	if(aux.valor < _valor)aux= aux.hijoIzq;
        	else aux = aux.hijoDer;
    	}
    	if(aux===null)return false;

    	return true;
	}

	this.EstaVacio = function(){
		return  raiz === null;
	}


	this.ImprimirPorNiveles = function(){
		if(this.raiz === null){
			console.log("Esta vacia");
			return;
		}
		var colaDeEspera = Object.create(Queue.prototype);
		Queue.call(colaDeEspera);
		//var colaDeEspera = new Queue();

		colaDeEspera.enqueue(this.raiz);

		var aux;

		while(!colaDeEspera.empty()){
			aux = colaDeEspera.dequeue();
			console.log(aux.valor);
			if(aux.hijoIzq !== null)
				colaDeEspera.enqueue(aux.hijoIzq);

			if(aux.hijoDer !== null)
				colaDeEspera.enqueue(aux.hijoDer);
		}

	}

};

function Queue(){
  
  this.dataStore = Array.prototype.slice.call(arguments, 0);
  this.enqueue = enqueue; 
  this.dequeue = dequeue;
  this.empty = empty;
  
  this.print = print;
  
  function enqueue (element) {
    this.dataStore.push(element);
  }
  
  function dequeue(){
    return this.dataStore.shift();
  }
  
  function empty(){
    return this.dataStore.length == 0;  
  }
  
  function print(element){
    this.dataStore.forEach(function(item){
      element.appendChild(item.node);
    });
  }
}
	
var arbolito = Object.create(ABB.prototype);

ABB.call(arbolito);

arbolito.push(10);

arbolito.push(3);
arbolito.push(7);


arbolito.push(6);
arbolito.push(92);

arbolito.ImprimirAscendente();

/*

console.log("Imprimir ascendente  ");

arbolito.ImprimirAscendente();

console.log("Imprimir descendente  ");

arbolito.ImprimirDescendente();

console.log("Imprimir por niveles  ");
arbolito.ImprimirPorNiveles();

console.log("Borrar numero 3 e imprimir descendente");

arbolito.pop(3);

arbolito.ImprimirDescendente();

console.log("Prueba Vaciar")

arbolito.Vaciar();

arbolito.ImprimirDescendente();

console.log("El elemento 92 esta en el arbol:  "+ arbolito.Buscar(10));
*/



