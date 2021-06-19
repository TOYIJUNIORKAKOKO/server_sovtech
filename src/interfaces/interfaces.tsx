

// type for the page resolver
export type Page = { page:number}


// type for the name of the person resolver
export type Name = { name:string}


// interface for the swapi returned data
export interface Iperson {
    name: string
    height: string
    mass: string
    gender: string
    homeworld: string
}