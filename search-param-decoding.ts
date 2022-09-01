/*
Here trying to create generic type out of the query param
*/

import { String, Union } from "ts-toolbelt";

const query = `/home?name=shovan&profession=it`;

type Query = typeof query;

type SecondQueryPart = String.Split<Query, "?">[1];
type QueryElements = String.Split<SecondQueryPart, "&">;

type Key = String.Split<QueryElements[0], "=">[0]; // For understanding purpose
type Value = String.Split<QueryElements[0], "=">[1];   // For understanding purpose

type QueryParams = {
    [QueryElement in QueryElements[number]]: {
        [Key in String.Split<QueryElement, "=">[0]]: String.Split<QueryElement, "=">[1]
    }
}

type QueryValues = QueryParams[QueryElements[number]];

const obj: Union.Merge<QueryValues> = {
    name: "shovan",
    profession: "it"
}