import { SpecialDate, UserInfoOutcome } from "./types"

const maybeGetUserInfo = () : UserInfoOutcome => (Math.random() > 0.5) ? 
                                                        ["success", {name: "Mike North", email: "mike@example.com"}] : 
[                                                       "error", new Error("The coin landed on TAILS:(")]


//inheritance in type aliases
const newYearsEve: SpecialDate = {
    ...new Date(),
    getReason: () => "Last Day of the Year"
}

console.table([maybeGetUserInfo(), newYearsEve.getReason()])
