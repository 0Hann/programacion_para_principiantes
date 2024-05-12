let words: string[] =[
    "COMPUTADORA",
    "GATO",
    "PERRO",
    "CASA",
    "ORDENADOR",
    "PLAYA",
    "MONTAÑA",
    "BICICLETA",
    "LIBRO",
    "TELEVISOR",
    "JARDIN",
    "FUTBOL",
    "CINE",
    "MUSICA",
    "HAMBURGUESA",
    "PIZZA",
    "AVION",
    "AUTOMOVIL",
    "ESCUELA",
    "UNIVERSIDAD",
    "TRABAJO",
    "AGUACATE"
]
export function getRandomWord(){
    const randomIndex = ( Math.floor (Math.random() * words.length) );
    return words [randomIndex];
}