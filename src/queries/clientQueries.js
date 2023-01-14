import {gql} from '@apollo/client'

const GET_CLIENTS = gql`
  query GetClients {
    clients {
        id
        username
        email
        password
        money
    }
  }
`;


export {GET_CLIENTS};