
import { agregarDosNumeros, dividirDosNumeros, multiplicarDosNumeros, restarDosNumeros } from "../helpers/math-helpers";

// let nombre = 'Johan';
// saludar(nombre);

let num1 = 10;
let num2 = 20;

let total1: number = agregarDosNumeros (num1,num2);
let total2: number = restarDosNumeros (num1,num2);
let total3: number = dividirDosNumeros (num1,num2);
let total4: number = multiplicarDosNumeros (num1,num2);

console.log ('Total1: ', total1);
console.log ('Total2: ', total2);
console.log ('Total3: ', total3);
console.log ('Total4: ', total4);