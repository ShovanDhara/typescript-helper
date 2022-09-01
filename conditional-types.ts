/*
Here I'm returning conditional type based on generic type 
*/

type Animal = {
    name: string
};

type Human = {
    firstName: string;
    lastName: string;
}

type GetRequiredInformation<TType> = TType extends Animal ? { age: number } : {
    socialSecurityNumber: number
}

export type InformationForAnimal = GetRequiredInformation<Animal>;

export type InformationForHuman = GetRequiredInformation<Human>;