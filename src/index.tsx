import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import {ApolloServer} from 'apollo-server-express';

 
import {resolvers} from './resolvers/resolvers';
import {typeDefs} from './schema/schema';


const PORT = process.env.PORT || 5000

const app = express();


const startServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({app:app, path:'/swapi'});
   
    app.listen(PORT, () => console.log(`Running on port ${PORT}`))


}

startServer();