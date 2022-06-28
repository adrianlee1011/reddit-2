// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://dohar.stepzen.net/api/willing-pika/__graphql",
  headers: {
    Authorization: `apikey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
  },
  cache: new InMemoryCache(),
});

export default client;