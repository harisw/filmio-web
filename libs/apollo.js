import { ApolloClient, InMemoryCache } from "@apollo/client";

console.log(process.env.GRAPHQL_SERVER);
const client = new ApolloClient({
    uri: process.env.GRAPHQL_SERVER,
    cache: new InMemoryCache()
});

export default client;