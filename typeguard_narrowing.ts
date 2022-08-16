let value:
 | Date
 | null
 | undefined
 | "pineapple"
 | [number]
 | {dateRange: [Date, Date]}


 //instanceof
if (value instanceof Date) {
    value
}
//typeof
else if (typeof value === "string") {
    value
}
else if (!value) {
    value
}
// Some built-in functions
else if (Array.isArray(value)) {
    value
}
//Property presence check
else if ("dateRange" in value) {
    value
} else {
    value
}

interface CarLike {
    make: string
    model: string
    year: number
}

let maybeCar: unknown

// the guard
/* if (
    maybeCar &&
    typeof maybeCar === "object" &&
    "make" in maybeCar &&
    typeof maybeCar["make"] === "string" &&
    "model" in maybeCar &&
    typeof maybeCar["model"] === "string" &&
    "year" in maybeCar &&
    typeof maybeCar["year"] === "number"
    ) {
        maybeCar
} */

//refactor into a function
//the guard
/* function isCarLike(valueToTest: any) {
    return (
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
    )
}

//using the guard
if (isCarLike(maybeCar)) {
    maybeCar
} */

//USER DEFINED TYPE GUARD 1
//*** */ valueToTest is foo

/* // the guard
function isCarLike(
    valueToTest: any
) : valueToTest is CarLike {
    return (
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
    )
}

//using the guard
if (isCarLike(maybeCar)) {
    maybeCar
} */


//USER DEFINED TYPE GUARD 2
//***** asserts valueToTest is foo

function assertIsCarLike(
    valueToTest : any
): asserts valueToTest is CarLike {
    if (
        !(
        valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number"
        )
    )
     throw new Error (
        `Value does not appear to be a CarLike${valueToTest}`
     )
}

/* //using the guard
maybeCar

assertIsCarLike(maybeCar)
maybeCar
 */
//QUALITY TYPE GUARDS

function isNull(val: any) : val  is null {
    return !val
}

const empty = ""
const zero = 0
if (isNull(zero)) {
    console.log(zero)
}
if (isNull(empty)) {
    console.log(empty);
}


