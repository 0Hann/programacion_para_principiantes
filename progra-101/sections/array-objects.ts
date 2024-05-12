
export interface Person {
    age: number;
    isActive: boolean;
    name: string;
    
}

let johan: Person = {
    age: 21,
    isActive: true,
    name: 'Johan',
}

let jessica: Person = {
    age: 23,
    isActive: true,
    name: 'Jessica',
}

let people: Person[] = [johan, jessica]

for(let i = 0;i < people.length;i++) {
    let person = people[i]
    console.log(person.name + ' ' + person.age)
}
