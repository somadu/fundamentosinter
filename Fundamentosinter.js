// //Implementa una función sigma(num) que, dado un número, devuelve la suma de todos los enteros positivos
// //(incluyendo el número dado). Ej: sigma(3) = 6 (1+2+3); sigma(5) = 15 (1+2+3+4+5).

// function sigma(z) {
//     var sum = 0;
//     for (var i=0 ; i <= z ; i++){
//         sum = sum + i;
//     }
//   console.log(z)
//   return sum;
// }

// // Escribe una función factorial(num) que, dado un número, devuelva el producto (multiplicación) de todos los enteros
// // positivos (incluyendo el número dado). Por ejemplo: factorial(3) = 6 (1*2*3); factorial(5) = 120 (1*2*3*4*5).

// function factorial(x) {
//     var mult = 1;
//     for (var i=1 ; i <= x; i++){
//         mult = i * mult;
//     }
//     return mult;
// }

// //Crea una función para generar números de Fibonacci. En esta famosa secuencia matemática, cada número es la suma
// // de las dos anteriores, partiendo con los valores 0 y 1. 

// function FFibonacci(x){
//     var sum = 0;
//     var arr = [0,1];
//     for (var i = 2; i <= x; i++){
//         sum = arr[i-2] + arr[i-1];
//         arr.push(sum);
//     }
//     return arr[x];
// }

// // Devuelve el penúltimo elemento del array. Dado [42,true,4,”Liam”, 7] devuelve “Liam”. Si el array es muy pequeño,
// //  devuelve null.  

// function devol(x) {
//     if(x.length >= 4){
//         for (var i=0 ; i < x.length-1 ; i++){
//             if(x[i]==x.length-1){
//               return x.length-1;
//             }
//         }
//     }
//     return "null";
// }

// // Devuelve el elemento “N” último. Dado ([5,2,3,6,4,9,7],3], devuelve 6. Si el array es muy pequeño, devuelve null. 

// function devol(x,z) {
//     if(x.length >= 4){
//       for (var i=0 ; i < x.length ; i++){
//           if(x[i]==x[z]){
//               return x[i];
//           }
//       }
//     }
//     return "null";
//   }

//Devuelve el segundo elemento más grande de un array. Dado [42,1,4,3.14,7], devuelve 7.  Si el array es muy 
//pequeño, devuelve null.

function second(x) {
    var max = 0
    var lmax = 0
    var index= 0
    if(x.length >= 4){
      for (var i=0;i<x.length; i++){
        if(max < x[i]){
          max = x[i];
          index = i
        }
      }
      x[index] = x.length-1;
      second.pop();
      for (i=0 ; i<x.length;i++){
        if(lmax<x[i])
        lmax=x[i];
      }
      return lmax;
    }
    return "null";
  }

  console.log(second[1,5,7,12,32,1,42])