import {gql} from '@apollo/client'

const ADD_CLIENT = gql`
    mutation addClient($username: String!, $email: String!, $password: String!, $money: Float!)
    {
        addClient(username: $username, email: $email, password: $password, money: $money)
        {
            id 
            username
            email
            password
            money
        }
    }
`;

export {ADD_CLIENT};