import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
    brand: string;
    color: Colors;
    doors: number;

    constructor(brand: string, color: Colors, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    honk(): void {
        console.log('Honk!');
    }

    openTheDoor(door: Doors): void {
        console.log(`${door} open!`);
    }

    closeTheDoor(door: Doors): void {
        console.log(`${door} close!`);
    }

    turnOn(): void {
        console.log('On!');
    }

    turnOff(): void {
        console.log('Off!');
    }

    speedUp(): void {
        console.log('Vruuum!');
    }

    speedDown(): void {
        console.log('- Brake noise -');
    }

    stop() {
        console.log('Stop!');
    }

    turn(direction: Directions): void {
        console.log(`Turning ${direction}.`);
    }
}

export default Car;
