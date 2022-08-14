//Function/Method overloading is the process in which one method could be used multiple times
//with same name and different parameter types or return types.


/*
**Overloading Requirements**
Function name and number of parameters in overloaded functions should be same.
Return type of overloaded functions along with data types of parameters could be altered (changed).


**Overloading Advantages**
Method Overloading provides code reusability, which saves time and efforts.
This process also saves memory space, so that the program execution becomes bit faster.
This process also increases code readability.
*/

function addData(data1: string, data2: string) : string;
function addData(data1: number, data2: number) : number;
function addData(data1: any, data2: any) {
    return data1 + data2;
}

console.log(addData("Hello", " Alecho"));
console.log(addData(20,30));

class Data
{
    public displayData(data: string) : number;
    public displayData(data: number) : string;
    public displayData(data: any): any
        {
            if (typeof(data) === "number")
                return data.toString();
            if (typeof(data) === "string")
                return data.length;
        }
}

let object = new Data();
console.log(`Result is: ${object.displayData(123456)}`);
let stringData = "AlechoIsAGeek"
console.log(`Length of String ${stringData} is : ${object.displayData(stringData)}`);
