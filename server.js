import colors from 'colors';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// confiq dot env
dotenv.config();

// init apollo server
const server = new ApolloServer({});


// run server
const {url} = await startStandaloneServer(server, {
    listen: {
        port: 5050
    }
});

console.log(`Apollo server is running ${url}`)