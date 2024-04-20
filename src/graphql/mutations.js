import { gql } from '@apollo/client';
import { USER_DETAILS } from './fragments';

export const CREATE_USER = gql`
  mutation createUser($username: String, $password: String) {
    createUser(username: $username, password: $password) {
      ...UserDetails
    }
  }
  ${USER_DETAILS}
`;

export const AUTHENTICATE = gql`
  mutation authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        ...UserDetails
      }
    }
  }
  ${USER_DETAILS}
`;
