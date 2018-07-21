import sequelize, { Sequelize } from "../../database";
import { gql } from "apollo-server-express";

const userClient = sequelize.define("user", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  avatarUrl: Sequelize.STRING,
  twitterUsername: Sequelize.STRING
});

const resolver = {
  async User(root: any, args: { id: string }, context: any, info: any) {
    return userClient.findById(args.id);
  }
};

// Construct a schema, using GraphQL schema language
const typeDefinition = gql`
  type User {
    id: ID
    firstName: String
    lastName: String
    avatarUrl: String
    twitterUsername: String
  }
`;

userClient.insertOrUpdate({
  id: 1,
  firstName: "Ives",
  lastName: "van Hoorne",
  avatarUrl: "Hello",
  twitterUsername: "CompuIves"
});

export { resolver, typeDefinition, userClient as client };
