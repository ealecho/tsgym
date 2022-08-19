/* all parts of a class are called members

when you instantiate a class, you create a new
object in memory with its own copies

the static keyword allows objects that were
instantiated from classes to share the same
methods and properties behind the scenes



*/


class ClassWithProperty {
    abc = 123
}

class ClassWithStaticProperty {
    static abc = 123
}

class ClassWithMethod {
    method() {
        return 123
    }
}

class ClassWithStaticMethod {
    static method() {
        return 123
    }
}

const CLASS_A = new ClassWithProperty()
console.log(CLASS_A.abc)

// I could comment this out and it would still work
const CLASS_B = new ClassWithStaticProperty()

/* undefined 'abc' does not exist on CLASS_B instance.*/

//console.log(CLASS_B.abc);

//You must refrence it on the class name instead
console.log(ClassWithStaticProperty.abc);

const CLASS_C = new ClassWithMethod()
console.log(CLASS_C.method());


// I could comment this out and it would still work
const CLASS_D = new ClassWithStaticMethod()

/* undefined 'nethod' does not exist on CLASS_D instance.*/
//console.log(CLASS_D.method())

//You must refrence it on the class name instead
console.log(ClassWithStaticMethod.method());


/*
in the example below we do not need to recreate
PI across each new isntance of Circle
*/

class Circle {
    radius: number
    static PI = 3.14

    constructor(radius: number) {
        this.radius = radius
    }
}

console.log(`Circle.PI = ${Circle.PI}`);


const CIRCLE1 = new Circle(1)
const CIRCLE2 = new Circle(2)
const CIRCLE3 = new Circle(3)

console.log(`CIRCLE1 Area = ${Circle.PI * CIRCLE1.radius ** 2}`);
console.log(`CIRCLE2 Area =  ${Circle.PI * CIRCLE2.radius ** 2}`);
console.log(`CIRCLE3 Area = ${Circle.PI * CIRCLE3.radius ** 2}`);




