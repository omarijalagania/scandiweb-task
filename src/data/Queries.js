import { gql } from "@apollo/client";

export const GET_CATEGORY = gql`
  query {
    category {
      products {
        name
        id
        gallery
        prices {
          currency
          amount
        }
      }
    }
  }
`;
