interface UserInfo {
    name: string,
    email: string
}


function printUserInfo(info: UserInfo) {
    info.name
}

interface Animal {
    isAlive(): boolean
}

interface Mammal extends Animal {
    getFurOrHairColor(): string
}

interface Dog extends Mammal {
    getBreed() : string
}

function careForDog(dog: Dog) {
    dog.getBreed()
}

interface AnimalLike {
    eat(food: string): void
}

// heritage clause: implements (should produce an instance that confirms a certain interface)
class Dog implements AnimalLike {
    bark() {
        return "woof"
    }
    eat(food: string): void;
    eat(food: string): string;
    eat(food: unknown): string | void {
    }
}
//implements and extends can be used together
class LivingOrganism {
    isAlive() {
        return true
    }
}

interface CanBark {
    bark() : string
}


class SuperDog
    extends LivingOrganism
    implements AnimalLike, CanBark
{
    bark() {
        return "woof"
    }

    eat(food: string): void;
    eat(food: string): string;
    eat(food: unknown): string | void {
    }
}

//OPEN INTERFACES
// interfaces are open, meaning that unlike in type aliases you can have
// multiple declarations in the same scope
interface AnimalLike {
    isAlive(): boolean
}

const feed = (animal: AnimalLike) => {
    animal.eat
    animal.isAlive
}

//SECOND DECLARATION OF THE SAME NAME
interface AnimalLike {
    eat(food: string) : string
}

//Open interfaces are very useful and can help you in situations
//when you want to add global property to the window object
window.document // an existing property
window.exampleProperty = 45

// tells TS that `exampleProperty` exist
interface Window {
    exampleProperty: number
}

// we have augmented an exisitng Window interface that TypeScript has setup for us behind the secenes



