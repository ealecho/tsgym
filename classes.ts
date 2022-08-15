/* class Car {
    public make: string;
    public model: string;
    public year: number;
    protected vinNumber = generateVinNumber()
    private doorLockCode = generateDoorLockCode()

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }


    protected unlockAllDoors() {
        unlockCar(this, this.doorLockCode)
    }
}


class Sedan extends Car {
    constructor(make: string, model: string, year: number) {
        super(make, model, year)
        this.vinNumber
        this.doorLockCode
    }
    public unlock() {
        console.log(`Unlocking at ${new Date().toISOString()}`)
        this.unlockAllDoors()
    }
}

let s = new Sedan("Honda", "Accord", 2017)
s.make
s.vinNumber
s.doorLockCode
s.unlock() */

// #field_name
/* class Carr {
    public make: string
    public model: string
    #year : number

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.#year = year
    }
}

const c = new Car("Honda", "Accord", 2017)
c.#year */

//readonly

/* class Cab {
    public make: string
    public model: string
    public readonly year: number

    constructor(make: string, model: string, year: number) {
        this.make = make
        this.model = model
        this.year = year
    }

    updateYear() {
        this.year++
    }
}
 */


/* class Base { }

class Car extends Base {
    foo = console.log("class field initializer")
    constructor(public make: string) {
        console.log("before super")
        super()
        console.log("custom constructor struff")
    }
}

const c = new Car("honda"); */