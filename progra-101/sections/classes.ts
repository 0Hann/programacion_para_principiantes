
export class Car {

    static classname = 'Car';

    readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

    private readonly createAt: number;

    constructor(brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createAt = 123456789;

    }

    turnOn(){

        if (this.isRunning) {
            console.log('El carro ya estaba encendido');
            return;
        }

        if (this.fuelTank <= 0) {
            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true
        console.log('El carro encendió');

    } 

    fillTank(gas: number) {

        if (gas <= 0) {
            console.log('El gas tiene que ser positivo');
            return;
        }

        let newFuelTank = this.fuelTank + gas;
        if(newFuelTank >= 100){
            newFuelTank = 100;
        }
            this.fuelTank = newFuelTank;
    }

}

let myPorsche = new Car('Porsche','Sport');

console.log (myPorsche);
myPorsche.fillTank(1);
myPorsche.turnOn();
console.log (myPorsche);
console.log (Car.classname);