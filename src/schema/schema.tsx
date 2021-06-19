import {gql} from 'apollo-server-express';


export const typeDefs = gql`

    type People {
        name: String
        height: String
        mass: String
        gender: String 
        homeworld: String
    }

    type Query {
        getPeople: [People]
        getPage(page: Int): [People]
        getPerson(name: String): [People]
    }

`

