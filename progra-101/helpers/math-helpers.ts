import { Module } from "module";

export function agregarDosNumeros (num1: number, num2: number): number {
    return num1 + num2;
}

export function restarDosNumeros (num1: number, num2: number): number {
    return num1 - num2;
}

export function multiplicarDosNumeros (num1: number, num2: number): number {
    return num1 * num2;
}

export function dividirDosNumeros (num1: number, num2: number): number {
    return num1 / num2;
}

export function librasAKilogramos (libra:number) {
    return libra * 0.45359237
}

export function kilometrosAMillas (kilometro:number) {
    return kilometro * 0.6214
}

export function areaTrianguloRectangulo (base:number, altura:number) {
    let area:number;
    return area = 1/2 *base * altura
}

export function calcularMayorArreglo (numbers:number []) {
    let temp = -99999
    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] > temp) {
            temp = numbers[i]
        }
    }
    return 'El numero mayor del arreglo es: ' + temp;
}

export function parImpar (numbers:number []) {

    for (let i = 0; i < numbers.length; i++) {
        
  
        if (numbers[i] % 2 === 0) {
            console.log('El numero ' + numbers[i] + ' es par') ;
        } else {
            console.log('El numero ' + numbers[i] + ' es impar') ;
        }
    }
}

export function calcularMayorNumero (a:number,b:number,c:number) {

    if (a >= b && a >= c) {
        return a
    } else if (b >= a && b >= c){
        return b
    }
    return c
}

export function largestNameOfArray (nameArray: string[]) {

    let largestName = '.';

    for (let i = 0 ; i <nameArray.length ; i++){
        let name = nameArray[i];

        if (name.length > largestName.length) {

            largestName = name;

        }
        
    }
    return  largestName
}


