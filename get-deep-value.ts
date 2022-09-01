
/*
Here I'm trying cast exact type based on object passed in the function and getting the type from the 
object's nested property.

Change the param where we are calling getDeepValue and hover over const valueType
*/


export const getDeepValue = <TObj, TFirstKey extends keyof TObj, TSecondKey extends keyof TObj[TFirstKey]>(
    obj: TObj,
    firstKey: TFirstKey,
    secondKey: TSecondKey
) => {
    return obj[firstKey][secondKey]
}


const obj = {
    foo: {
        a: true,
        b: 2
    },
    bar: {
        c: "12",
        d: 18
    }
}

const valueType = getDeepValue(obj, "bar", "c");


console.log(typeof valueType) // string


/*
IN case you don't know the type , its better to use generic like this 
*/

const result = <T>(val: T) => {
    return val
}


/*
Use case of union types. Here I'm casting a union types which exist in the property
value of interface Letter 
*/

interface Letters {
    a: number;
    b: string;
    c: {
        name: string;
    }
}

type letterValues = Letters[keyof Letters]