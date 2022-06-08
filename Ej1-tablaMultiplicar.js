// Dado un numero, devolver su tabla de multiplicar completa.

/**TODO
 * Funcion con parametro "numero"
 * variable con texto encabezado
 * bucle del 1 al 10
 * concadenar a la variable string con la multiplicacion y su resultado
 */

const tablaMultiplicar = (number)=>{

let resultado = `***Tabla del ${number}***`
// hacer bucle del 1 al 10
    for (let index = 0; index <=10; index++) {
        const mutiplication = index*number;
       
        // anadir a resultado mas informacion
        resultado += `
        ${index} * ${number} = ${mutiplication}`
        console.log(resultado)
    }
}

tablaMultiplicar(2)

