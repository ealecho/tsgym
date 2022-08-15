//****Top types are any and unknown


// unknown

/* let flexible: unknown = 4
flexible = "Download some more ram"
flexible = window.document
flexible=  setTimeout */

let myUnknown: unknown = 14

// this code runs for {myUnknown| anything}
//NOTE to use values with an unknown type we have to
//apply type guards
if (typeof myUnknown === "string") {
    // this code runs for {myUnknown | all strings}
    console.log(myUnknown, "is a string")
} else if (typeof myUnknown === "number") {
    // This code runs for {myKnown | all numbers }
    console.log(myUnknown, "is a number")
} else {

}


//**** bottom types  :never

//Exhaustive conditionals
class Car {
    drive() {
        console.log("vroom");
    }
}
class Truck {
    tow() {
        console.log("draggin something");
    }
}

class Boat {
    isFloating() {
      return true
    }
}

type Vehicle =  Truck | Car | Boat

let myVehicle: Vehicle =  obtainRandomVehicle()

//The exhaustive conditional
if (myVehicle instanceof Truck) {
    myVehicle.tow() //Truck
} else if (myVehicle instanceof Car) {
    myVehicle.drive() // Car
} else {
    //NIETHER!
    throw new Error(
        myVehicle,
        `Unexpected vehicle type: ${myVehicle}`
    )
}

function obtainRandomVehicle(): Vehicle {
    throw new Error("Function not implemented.");
}
