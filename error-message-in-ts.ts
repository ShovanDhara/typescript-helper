/*
Here I'm showing custom error message if you pass wrong type
*/

export const deepEqual = <Arg>(a: Arg extends any[] ? `Don't pass an array` : Arg, b: Arg): boolean => {
    return a === b;
}

deepEqual('a', 'b');
deepEqual(['a', 'b'], [])