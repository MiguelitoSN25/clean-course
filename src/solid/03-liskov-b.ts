export abstract class Vehicle{
    abstract getNumberOfSeats():number
}





export class Tesla  extends Vehicle  {
    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }

    constructor( private numberOfSeats: number ) {
        super()
    }

}

export class Audi extends Vehicle  {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Toyota  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Honda  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

export class Ferrari  extends Vehicle {

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        throw new Error("Method not implemented.");
    }
}

