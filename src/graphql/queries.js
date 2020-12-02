import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      id
      title
      image_url
      price (currency: USD)
      product_options {
        title
        prefix
        suffix
        options {
          id
          value
        }
      }
    }
  }
`;