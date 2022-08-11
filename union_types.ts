//UNION & INTERSECTION Types

//Union Types are OR for types. They are described in Typescript using the | (pipe) operator
//e.g if we had a type type that could be one of two strings, "success" or "error" we could define it as "success" | "error"
//Intersections Types are AND for types. 

//Dear future Edwin for give me for utilizing the conditional (tenary)? operator and arrow functions. const foo = () => it hurts readbilty
const filpCoin = () : "heads" | "tails" => Math.random() > 0.5? "heads": "tails" 

const maybeSumin = () : 
    | ["error", Error]
    | ["success", {name: string; email: string}]  => (filpCoin() === "heads") ? ["success", {name: "william", email: "wil@yandex.ru"}] : ["error", new Error("The coin has landed on TAILS: (")]


const outcome = maybeSumin()


const [first, second] = outcome;

// type guards ie. using instance of to separate two potential possibilites for our value
const data = second instanceof Error ? second : second


//discriminated unions
//typescript understands that the first and second positions of our tuple are linked
const data2 = outcome[0] === "error" ? outcome : outcome


// Intersection Types
// these can be described with the & operator
// eg.

const ONE_WEEK = 1000 * 60 * 60 * 24 * 7
const makeWeek = (): Date & {end: Date} => {
    const start = new Date()
    const end = new Date(start.valueOf() + ONE_WEEK)

    return {...start, end}
}

const thisWeek = makeWeek()

thisWeek.end.toISOString

console.table([thisWeek.end.toISOString()])