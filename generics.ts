/* GENERICS */

import { idText } from "typescript"

/* using index signatures */
const phones: {
    [k: string]: {
        customerId: string
        areaCode: string
        num: string
    }
} = {}

/* Key value dictionary */
const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
  ]

const phoneDict = {
    "0001": {
      customerId: "0001",
      areaCode: "321",
      num: "123-4566",
    },
    "0002": {
      customerId: "0002",
      areaCode: "174",
      num: "142-3626",
    },
    /*... and so on */
  }

interface PhoneInfo {
    customerId: string,
    areaCode: string,
    num: string,
}

/* function listToDict(
    list: PhoneInfo[],
    idGen: (arg: PhoneInfo) => string
): {[k: string]: PhoneInfo} {
    //create an empty dictionary
    const dict: {[k: string]: PhoneInfo} = { }

    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return a dictionary
    return dict
}

console.log(
    listToDict(phoneList, (item) => item.customerId)
); */


/* try with any */
/* function listToDict(
    list: any,
    idGen: (arg: any) => string
): {[k: string]: any} {
    //create an empty dictionary
    const dict: {[k: string]: any} = { }

    // Loop through the array
    list.forEach((element: any) => {
        const dictKey = idGen(element)
        dict[dictKey] = element // store element under key
    })

    // return a dictionary
    return dict
}

const dict = listToDict(
    [{name: "Mike"}, {name: "Mark"}],
    (item) => item.name
)

console.log(dict) */


/*  we need a way of defining the relationship between the
type of thing we are passed and the type of thing that we
retun
*/

function wrapInArray<T>(arg: T) : [T] {
    return [arg]
}

wrapInArray(3)
wrapInArray(new Date())
wrapInArray(new RegExp("/s/"))


/* function listToDict<T>(
    list: T[],
    idGen: (arg: T) => string
) : {[k: string]: T} {
    const dict: {[k: string]: T} = {}
    return dict
}

listToDict(
    [
       new Date("10-01-2021"),
       new Date("10-01-2021"),
       new Date("10-01-2021"),
       new Date("10-01-2021"),
       new Date("10-01-2021"),
    ],
    (arg) => arg.toISOString()
)
 */

/* Everything together now */
function listToDict<T> (
    list: T[],
    idGen: (arg: T) => string
) : {[k: string]: T} {

    // create an empty dictionary
    const dict: {[k: string]: T} = {}


    // extract the key from each element
    list.forEach((element) => {
        const dictKey = idGen(element)
        dict[dictKey] =  element
    })

    // return a dictionary
    return dict
}


const dict1 =  listToDict(
    [
        {name: "Mike"}, {name: "Mark"}
    ],
    (item) => item.name
)

console.log(dict1)
dict1.Mike

const dict2 = listToDict(phoneList, (p) => p.customerId)
dict2.fax
console.log(dict2)