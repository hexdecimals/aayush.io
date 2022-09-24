import { gql } from '@urql/core';

export default gql`
  query ($query: String!, $first: Int!) {
    search(query: $query, type: DISCUSSION, first: $first) {
      edges {
        node {
          ... on Discussion {
            number
            id
            title
            body
            createdAt
            lastEditedAt
            category {
              id
              name
            }
            labels(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`;
