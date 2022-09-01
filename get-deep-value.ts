
/*
Here I'm trying cast exact type based on object passed in the function and getting the type from the 
object's nested property
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