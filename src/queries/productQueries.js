import {gql} from '@apollo/client'

const GET_PRODUCT = gql`
  query GetProducts {
    products {
      id
      name
      target
      apparel
      url
      price
      description
    }
  }
`;

export {GET_PRODUCT};