import { gql } from '@urql/core';

export default gql`
  query ($owner: String!, $repo: String!, $limit: Int!) {
    repository(owner: $owner, name: $repo) {
      discussions(
        first: $limit
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            ... on Discussion {
              id
              title
              body
              createdAt
            }
          }
        }
      }
    }
  }
`;
