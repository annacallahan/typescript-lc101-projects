import { Payload } from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let results: number = 0;
        for(let i = 0; i < items.length; i++){
            results += items[i].massKg;
        }
            return results;
        }

    currentMassKg(): number {
        let results = 0;
        results = this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
        return results;
    }
    canAdd(item:Payload): boolean {
        let results = false;
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
           results = true;
        }
        return results;
    }
    addCargo(cargo: Cargo) {
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false
        }
    }
}