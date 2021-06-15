import { GraphQLClient } from 'graphql-request';

import { FAUNA_DB_SERVER_KEY } from "@env";
 
const graphQLClient = new GraphQLClient('https://graphql.fauna.com/graphql', {
  headers: {
    authorization: `Bearer ${FAUNA_DB_SERVER_KEY}`,
  },
});

export {
  graphQLClient
};