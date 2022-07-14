import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let totalMass = 0;
        for (let i = 0; i < items.length; i++) {
            totalMass += items[i].massKg;
        }
        return totalMass;
    }

    currentMassKg(): number {
        let cargoMassTotal = this.sumMass(this.cargoItems);
        let astronautsMassTotal = this.sumMass(this.astronauts);
        return cargoMassTotal + astronautsMassTotal;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        let itCanAddCargo = this.canAdd(cargo);
        if (itCanAddCargo === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        let itCanAddAstronaut = this.canAdd(astronaut);
        if (itCanAddAstronaut === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}