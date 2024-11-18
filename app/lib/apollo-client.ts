// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.WP_GRAPHQL_ENDPOINT || "https://fuseideas.com/graphql",
  }),
  cache: new InMemoryCache(),
});

export default client;
