// Dada una cadena de texto, comprobar si es un Palindrome o notification.
// Palindrome son palabras que se leen igual cuando estan invertidas.
// Ej:
// AnalyserNode, bob, otto, allivessevilla.
// no tener encuenta espacios o simbolos raros

// Ej. Palindrome ("otto")// true
// Palindrome("bea")// false

/**TODO
 * Funcion con parametro "text"
 * separar el texto en un array de letras (split)
 * darle la vuelta (reverse)
 * unir el array de letras en un string (join)
 * y compar con el parametro (condicional)
 */

let polidromo = (text) => {
  let invertido = text.split("").reverse().join("");
  if (invertido === text) { // === compara hasta el tipo de dato
    console.log("Es un Palindrome!");
  } else {
    console.log("No es un Palindrome, escribe otra palabra");
  }
};

polidromo("caca");
