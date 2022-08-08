/*eslint-disable @typescript-eslint/no-unused-vars */
// Adding Type ANNOTATIONS
// Replace the `unknown` type annotations with the correct type
let guestCount : number = 50;

let favoriteDessert : string = "Cheesecake";


const ingredients: string[] = [
    "butter",
    "flour",
    "backing powder",
    "sugar",
    "eggs",
    "vanilla",
    "salt"
];


//correcting Variables values
const menu: {
    courses: number;
    veganOption: boolean;
    drinkChoices: string[];

} = {
    courses: 5,
    veganOption: true,
    drinkChoices: ["wine", "whiskey"]
};


//Function Annotation
const apple = {
    name: "Apple",
    color: "red",
    sweetness: 80
};


function eatFruit(fruit: {name: string}) {
    if (fruit.name === "apple") {
        console.log("I love apples!");
    }

    console.log("Fruits is very tasty.");
}

eatFruit(apple);

function transformFruit(fruitList: string[], transFormFunction : (item: string) => string) {
    return fruitList.map(transFormFunction);
}


const fruitList = ["Apple", "Banana", "Orange"];


function bakeFruit(fruitName: string) : string {
    return `Baked ${fruitName}`;
}

const bakedFruit = transformFruit(fruitList, bakeFruit);