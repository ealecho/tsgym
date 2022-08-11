///////////////////////////////////////////////////////////
// @filename: original.ts
/**
 * ORIGINAL version
 */


const maybeGetUserInfo1 = (): 
    | ["error", Error] 
    | ["success", {name: string; email: string}] => {
         // implementation is the same in both examples
       return (Math.random() > 0.5)? ["success", {name: "Mike North", email: "mike@example.com"}] : ["error", new Error("The coin landed on TAILS: ("),]

}