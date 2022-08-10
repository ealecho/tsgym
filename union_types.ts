function filpCoin() : "heads" | "tails" {
    if (Math.random() > 0.5) return "heads"
    return "tails"
}

function maybeSumin() : 
    | ["error", Error]
    | ["success", {name: string; email: string}] {
         return filpCoin() === "heads" ? ["success", {name: "william", email: "wil@yandex.ru"}] : ["error", new Error("The coin has landed on TAILS: (")]
}




