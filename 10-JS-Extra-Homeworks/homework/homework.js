// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  var matriz1=[];
  
  
  for (let clave in objeto){
    
    matriz1.push([clave,objeto[clave]]);
    
  }
  return matriz1;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cuenta = {};

  for(let i = 0; i < string.length; i++){
    if(!cuenta[string[i]]){
      cuenta[string[i]] = 0;
    }  
    cuenta[string[i]] += 1;
  }
  return cuenta;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
 
    var palabraMayuscula=''; 
    var palabraMinuscula='';
    var nuevo=s;
    for(var i = 0; i < nuevo.length; i++){
      var letra = nuevo[i];
      if(letra == letra.toUpperCase()){
        //Si entra, significa que es mayuscula
        palabraMayuscula+= letra; //Concatenamos la letra mayuscula
      }else{
        palabraMinuscula+= letra; //Concatenamos la letra minuscula
      }
  }
  //Al terminar el ciclo, concatenamos ambos resultados y lo retornamos
  palabra=palabraMayuscula + palabraMinuscula;
  return palabra;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
   var cadena= str.split(' ');
   var cadenatotal='';
   var largo=cadena.length-1;
   for(i=0;i< cadena.length; i++){
    var reverso=cadena[i].split('').reverse().join('');
     if (i === largo){
      cadenatotal=cadenatotal+reverso;
     }
     else{
      cadenatotal=cadenatotal+reverso+' ';
     }
    }
   return cadenatotal;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  var numerostr=''+numero;
  var reverso=numerostr.split('').reverse().join('');
  if (numerostr == reverso){
    return 'Es capicua';
  }
  else{
    return 'No es capicua';
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var palabranueva='';

    var nuevo=cadena;
    for(var i = 0; i < nuevo.length; i++){
      var letra = nuevo[i];
      if(letra === 'a' || letra === 'b' || letra === 'c'){
          palabranueva+= '';
      }else{
        palabranueva+= letra; 
      }
  }

    return palabranueva;
  
  
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
 
  arr.sort(function(a, b) {
    //Los queremos ordenados del mas corto al mas largo, por lo tanto usamos...
    return a.length - b.length
    //En caso contrario, usariamos return b.length - a.length
  });
 return arr;
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  var common = arreglo1.filter(x => arreglo2.includes(x))
 
  return common;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

