
// Adding Type ANNOTATIONS
// Replace the `unknown` type annotations with the correct type
let guestCount : unknown = 50;

let favoriteDessert : unknown = "Cheesecake";


const ingredients: unknown = [
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
    veganOption: true
};


//Function Annotation
const apple = {
    name: "Apple",
    color: "red",
    sweetness: 80
};

function eatFruit(fruit) {
    if (fruit.name === "apple") {
        console.log("I love apples!");
    }

    console.log("Fruits is very tasty.");
}

eatFruit(apple);

function transformFruit(fruitList, transFromFunction) {
    return fruitList.map(transFromFunction);
}


const fruitList = ["Apple", "Banana", "Orange"];


function bakeFruit(fruitName) {
    return `Baked ${fruitName}`;
}

const bakedFruit = transformFruit(fruitList, bakeFruit);