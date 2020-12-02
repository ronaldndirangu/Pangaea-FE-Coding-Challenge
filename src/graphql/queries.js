import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query getProducts($currency: Currency!) {
    products {
      id
      title
      image_url
      price (currency: $currency)
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

export const GET_CURRENCIES = gql`
  query getCurrencies {
    currency
  }
`