"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = apollo_server_express_1.gql `

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

`;
