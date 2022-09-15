/*
Get the first property from an array 
*/

type First<TArray extends any[]> = TArray extends [infer TFirst, ...any[]] ? TFirst : never;

type Result = First<['a', 'b']>; // a