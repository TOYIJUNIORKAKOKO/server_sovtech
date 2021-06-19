"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonBySearch = exports.getPeopleByPageNo = exports.getAllPeople = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const URL = process.env.SWAPI;
// Making URL request from the Start Wars Api (SWAPI)
const getAllPeople = () => axios_1.default.get(URL);
exports.getAllPeople = getAllPeople;
const getPeopleByPageNo = (page) => axios_1.default.get(`${URL}?page=${page}`);
exports.getPeopleByPageNo = getPeopleByPageNo;
const getPersonBySearch = (name) => axios_1.default.get(`${URL}?search=${name}`);
exports.getPersonBySearch = getPersonBySearch;
