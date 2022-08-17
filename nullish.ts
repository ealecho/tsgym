//null
// there is a value and that value is nothing

type UserInfoo = {
    name: string,
    email: string,
    secondaryEmail: string | null
}

const mark : UserInfoo = {
    name:"Mike",
    email: "mike@example.com",
    secondaryEmail: null
}

//undefined
// means the value is not available yet


type FormInProgress = {
    createdAt : Date,
    data: FormData,
    completedAt?: Date,
}

const formInProgress : FormInProgress = {
    createdAt : new Date(),
    data: new FormData(),
    completedAt: undefined,
}
/*
the use of undefined is an unambigous indication
that there maybe something different there in the future
*/

function submitForm() {
    formInProgress.completedAt = new Date()
}

/*
**VOID**
use to indicate that a function's return value
should be ignored
*/

/* non-null assertion operator (!.)
you are telling typescript that the value maybe null or undefined
however be that as it maybe please ignore that possiblity

NOT RECOMMENDED UNLESS, your test infrastructure is on point
*/

type GroceryCart = {
    fruits?: {name: string; qty: number}[]
    vegetables?: {name: string; qty: number}[]
}

const cart: GroceryCart = {}
cart.fruits!.push({name: "kumkat", qty: 1})

 /* 
 *** Definite assignment operator (:!)

 when there is a possibility that a class field
 could be accessed before it is proven that it was intialized
 typescript will object. eg if you remove the (:!) assignment operator from
 the isSetup field  TS will SCREAM that Property 'isSetup' has no initializer 
 and is not definitely assigned in the constructor.
 */


 class ThingWithAsyncSetup {
    setupPromise: Promise<any>
    isSetup!: boolean


    constructor() {
        this.setupPromise = new Promise((resolve) => {
            this.isSetup = false
            // *** this function passed into the promise constructor
            // is resolved synchronously
            return this.doSetup(resolve)
        }).then(() => {
            this.isSetup = true
        })
    }

    private async doSetup(resolve: (value: unknown) => void) {
        // some async stuff
    }
 }

 let myThing = new ThingWithAsyncSetup()
 myThing.isSetup

 /*  we know something that the complier doesnt which is ***
    meaning that by the time we recieve our instance of ThingWithAsyncSetup
    the isSetup field will most probably have a value of false
 */