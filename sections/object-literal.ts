import { isNumberObject } from "util/types"

export let person = {
    nombre: 'Johan',
    edad: 21,
    isActive: true,
    hobbies: ['videoGames','Music'],
    toString() {
        let objectString = this.nombre + ' ' + this.edad + ' ' + this.hobbies
        console.log(objectString);
    }

}

// person.toString();

let car = {
    puertas: 2,
    llantas: 4,
    marca: 'porsche',
    anio: 2025
}

let smartTv = {
    tamanioPulgadas: 120,
    smart: true,
    color: 'negro'
}

let youtubeVideo = {
    duracionMinutos: 10,
    likes: 100,
    dislikes: 2,
    calidad: 'hd'
}

console.log(car)
console.log(smartTv)
console.log(youtubeVideo)