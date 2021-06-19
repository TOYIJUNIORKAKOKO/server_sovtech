import {getAllPeople, getPeopleByPageNo, getPersonBySearch} from '../api/swapi';
import {Page, Name, Iperson} from '../interfaces/interfaces';


const convertedData = (data:any) => (
    data.results.map((person:Iperson) => ({
        name: person.name,
        height: person.height,
        mass: person.mass,
        gender: person.gender,
        homeworld: person.homeworld
       }) 
    )
)



export const resolvers = { 
    Query: {

        getPeople: async () => {
            const {data} = await getAllPeople();

            return convertedData(data);
        },


        getPage: async (_:any, args:Page) => {
            const {page} = args;
            
            const {data} = await getPeopleByPageNo(page)

            return convertedData(data)
        }, 


        getPerson: async (_:any, args:Name) => {
            const {name} = args;
            
            const {data} = await getPersonBySearch(name)

            return convertedData(data)
        }
    },

}