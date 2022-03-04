import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { gql, ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

let books: Array<Object> = [
  {
    id: 0,
    title: "test1",
  },
  {
    id: 1,
    title: "test2",
  },
  {
    id: 2,
    title: "test3",
  },
];

const typeDefs = gql`
  type Book {
    id: Int
    title: String
  }

  type Query {
    getBooks: [Book]
  }
`;

const resolvers = {
  Query: {
    getBooks: () => {
      return books;
    },
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
