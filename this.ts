//<button onClick="myClickHandler">Click Me!</button>


function myClickHandler(event: Event) {
    // 'this implicitlty has 'any' because it does not have a type annotation
    this.disabled =  true
}

myClickHandler(new Event("click"))

/* we need to give this function a this type */

function myClickHandler2(
    this: HTMLButtonElement,
    event: Event
) {
    this.disabled = true
}



