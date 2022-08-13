//callable types

//type alliases and interfaces give us the ability describe call signatures
interface TwoNumberCalculation {
    (x: number, y: number) : number
}

type TwoNumberCalc = (x: number, y: number) => number

const add: TwoNumberCalculation = (a,b) => a+b

const substract: TwoNumberCalc = (x,y) => x-y

//construct signatures

interface DateConstructor {
    new (value: number) : Date
}

let MyDateConstructor : DateConstructor = Date
const d = new MyDateConstructor()

console.log(d);

// Function Overloads