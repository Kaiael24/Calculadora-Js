// Requerir archivos
const sumar = require("./funciones/sumar")
const restar = require("./funciones/restar")
const multiplicar = require("./funciones/multiplicar")
const dividir = require("./funciones/dividir")
const process = require("process")

let consola =process.argv[2] && process.argv[2].toLowerCase()
let numero1 = Number(process.argv[3])
let numero2 = Number(process.argv[4])

switch(consola){
    case "sumar":
        console.log("*******************************")
        console.log(`El resultado de la suma es: ${sumar(numero1, numero2)}`)
        console.log("*******************************")
        break;
    case "restar":
        console.log("********************************")
        console.log(`El resultado de la resta es: ${restar(numero1, numero2)}`)
        console.log("********************************")
        break;
    case "multiplicar":
        console.log("*****************************************")
        console.log(`El resultado de la multiplicación es: ${multiplicar(numero1, numero2)}`)
        console.log("*****************************************")
        break;
    case "dividir":
        if(numero1 == 0 || numero2 == 0){
            console.log("****************************************")
            console.log(`Lo siento, no se puede dividir por cero`)
            console.log("****************************************")
        }
        else{
            console.log("***********************************")
            console.log(`El resultado de la división es: ${dividir(numero1, numero2)}`)
            console.log("***********************************")
        }
        
        break;
    case undefined:
        console.log("*****************************************")
        console.log(`Ingresa correctamente una operación a realizar:\nSumar/ Restar / Multiplicar / Dividir`)
        console.log("*****************************************")
        break;
    default:
        console.log("************************************")
        console.log(`Error, lo que ingreso es incorrecto.`)
        console.log("************************************")
}

