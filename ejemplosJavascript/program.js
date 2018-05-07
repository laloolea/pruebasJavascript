var  txt = "EJEMPLO CREACION FUNCION"



document.write(txt.bold()+"<br/>");
function direccion(calle,numero,colonia){
	 document.writeln("Vivo en " + calle +" numero "+ numero + " en la colonia " +colonia+".")
}

var direccionLalo = new direccion("rio grande","186","nacameri")

//Se imprime solo porque eso hace la funcion


txt ="EJEMPLO CREACION OBJETO SIN CONSTRUCTOR (VALORES POR DEFAULT)"

document.write("<br/><br/>"+txt.bold());

var Persona = {nombre:"Pedro",
 	pais:"Mexico",
 	nacionalidad:"Mexicana",
   	residencia:"Hermosillo"
};

	
document.writeln("<br/>Soy " + Persona.nombre + " vivo en "+ Persona.pais + " soy de nacionalidad " + Persona.nacionalidad +" y vivo en " + Persona.residencia+".<br/><br/>")

txt= "EJEMPLO CREACION OBJETO CON CONSTRUCTOR"

document.write(txt.bold()+"<br/>");
//Creacion objeto con constructor
function Estudiante(first, last, age, expedient) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.expedient = expedient;
    this.Datos = function(){ return "Soy " + this.firstName +" "+ this.lastName+ " tengo " + this.age +" anios y mi expediente es " +this.expedient; };
}


var eduardo = new Estudiante("Eduardo","Olea",20,216320133)


document.writeln(eduardo.Datos())



txt= "<br/><br/>EJEMPLO CREACION ARREGLO CON VALOR INICIAL"

document.write(txt.bold()+"<br/>");

Array.dim = function (dimension, initial){
	var a =[],i;	 	
	for( i =0; i < dimension ; i+= 1){
		a[i]=initial;
	}
	return a;
};

var myArray= Array.dim(10,1);

var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]+",");
}

txt= "<br/><br/>EJEMPLO CREACION MATRIZ CON VALOR INICIAL"

document.write(txt.bold());

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};
document.writeln("<br/>")
var myMatrix = Array.matrix(3,3,0)
var j
for (i = 0; i < myMatrix.length; i += 1) {
    for (j = 0; j < myMatrix.length; j += 1) {
    	document.writeln(myMatrix[i][j])
	}
	document.writeln("<br/>")
}

txt= "<br/><br/>EJEMPLO METODO POP ARREGLO (BORRA ULTIMA POSICION) <br/>"

document.write(txt.bold());

myArray.pop();

for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]+",");
}

txt= "<br/><br/>EJEMPLO METODO JOIN ARREGLO (CONCATENA CON ALGUN SEPARADOR) <br/>"
document.write(txt.bold());

var c = myArray.join(' ');

document.write(c);

/*


var herencia = Persona ({
		nombre:"Pedro",
	 	pais:"Mexico",
	 	nacionalidad:"Mexicana",
	   	residencia:"Hermosillo"}
	;)

*/


//var d = new Date();

//document.writeln(d)






