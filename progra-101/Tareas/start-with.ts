
export function heroesThatStartsWith (nameList: string[], letter: string) {
    letter = letter.toUpperCase();
    let newNameList:string[] = [];

    for (let i = 0 ; i < nameList.length ; i++) {
        if (nameList[i].startsWith(letter)){
            newNameList.push(nameList[i])
        }
    }   
    return  newNameList;
}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 
let herosWithLetterS = heroesThatStartsWith( heroes, 's' );  
console.log( herosWithLetterS ); 