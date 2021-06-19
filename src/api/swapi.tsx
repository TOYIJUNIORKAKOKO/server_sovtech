import dotenv from 'dotenv';
import axios from 'axios';
dotenv.config();

 
const URL:any = process.env.SWAPI


// Making URL request from the Start Wars Api (SWAPI)
export const getAllPeople = () => axios.get(URL);
export const getPeopleByPageNo = (page:any) => axios.get(`https://swapi.dev/api/people/?page=${page}`)
export const getPersonBySearch = (name:any) => axios.get(`https://swapi.dev/api/people/?search=${name}`)