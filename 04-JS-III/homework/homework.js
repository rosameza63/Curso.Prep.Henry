// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  return array[array.length -1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  for (var i=0; i< array.length; i++){
    array[i]=array[i]+1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  var todas='';
  for (var i=0; i< palabras.length; i++){
    if (i === (palabras.length-1)){
      todas=todas + palabras[i] ;
    }
    else{
      todas=todas + palabras[i] + ' ';
    }
    
  }
  return todas;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  
  if (array.includes(elemento)){
    return true;
  }
  else{
    return false;
  }

}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  var total=0;
  for (j=0; j < numeros.length; j++){
    total=total + numeros[j];
  }
  return total;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  var largo=resultadosTest.length;
  var total=0;
  var promedio=0
  for (i=0; i< resultadosTest.length; i++){
    total=total + resultadosTest[i];
  }
  promedio=total/largo;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  return Math.max(...numeros);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
if (arguments[0] == undefined) return 0;
let resultado = 1;
for (let index = 0; index <= arguments.length - 1; index++) {
  resultado = resultado * arguments[index];
}
return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayorDiez8 = arreglo.filter(element => element > 18);
  var cuantos=mayorDiez8.length;
  return cuantos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  if (numeroDeDia===1 || numeroDeDia===7){
    return 'Es fin de semana';
  } 
  else{
    return 'Es dia Laboral';
  }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var nTexto = ''+n;
  let result = nTexto.substring(0,1);
  if(result == '9') {
   return true;
  }
  else{
    return false;
  }
    
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
    const comparacion = arreglo[0]; // <-- El elemento lo dejamos fuera del loop
    var largo=arreglo.length;
    var conteo=0;
    for (let i = 0; i < arreglo.length; i++) {
  
      if (arreglo[i] === comparacion) { // <-- Siempre comparamos con el primero
        conteo++;
        continue;
    
      } else {
          return false; // <-- Se termina la función y la iteración en false
      }
    } 
    if (conteo===largo){
      return true; // <-- Si recorrió todos es que está todo bien, !!fuera del for
    }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  var buscaE="Enero";
  var buscaM="Marzo";
  var buscaN="Noviembre";
  var indiceE = array.indexOf(buscaE);
  var indiceM = array.indexOf(buscaM);
  var indiceN = array.indexOf(buscaN);
  var nuevoArray = new Array();
  var j=0;
  var sitodos=0;
for (i=0; i<array.length; i++){
  if (array[i]===buscaE){
    sitodos++;
    nuevoArray[j]=buscaE;
    j++;
  }
  else if (array[i]===buscaM){
    sitodos++;
    nuevoArray[j]=buscaM;
    j++;
  }
  else if (array[i]===buscaN){
    sitodos++;
    nuevoArray[j]=buscaN;
    j++;
  }
}
  if (sitodos===3){
    return nuevoArray;
  }
  else{
    return 'No se encontraron los meses pedidos';
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  let mayorQueCien = array.filter(element => element > 100);
  return mayorQueCien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  var nuevoArray = new Array();
  var iteraciones=10;
  var j=0;
  for (i=1; i<=iteraciones; i++){
    numero=numero + 2;
    if (numero===iteraciones){
      return 'Se interrumpió la ejecución';
      break;
    }
    else{
      
      nuevoArray[j]=numero;
      j++;
    }
  }
  return nuevoArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  var nuevoArray = new Array();
  var iteraciones=10;
  var j=0;
  for (i=1; i<=iteraciones; i++){
    
    if (i===5){
      continue;
    }
    else{
      numero=numero +2;
      nuevoArray[j]=numero;
      j++;
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
