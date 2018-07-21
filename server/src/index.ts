import express from "express";
import { merge } from "lodash";

import * as users from "./models/users";

import { ApolloServer, gql } from "apollo-server-express";

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  ${users.typeDefinition}

  type Query {
    hello: String
    me: User
  }
`;

// Provide resolver functions for your schema fields
const resolvers = merge({
  Query: {
    hello: () => "Hello world!",
    me: users.resolver.User
  }
});

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
