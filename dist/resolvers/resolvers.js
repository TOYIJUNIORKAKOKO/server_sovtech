"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const swapi_1 = require("../api/swapi");
const convertedData = (data) => (data.results.map((person) => ({
    name: person.name,
    height: person.height,
    mass: person.mass,
    gender: person.gender,
    homeworld: person.homeworld
})));
exports.resolvers = {
    Query: {
        getPeople: () => __awaiter(void 0, void 0, void 0, function* () {
            const { data } = yield swapi_1.getAllPeople();
            return convertedData(data);
        }),
        getPage: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { page } = args;
            const { data } = yield swapi_1.getPeopleByPageNo(page);
            return convertedData(data);
        }),
        getPerson: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { name } = args;
            const { data } = yield swapi_1.getPersonBySearch(name);
            return convertedData(data);
        })
    },
};
