
import { gql } from 'graphql-tag'
export const userSchema = gql`
  type UserProfile {
    id: ID!
    name: String!
    isVip: Boolean!
  }
  type Query {
    currentUser: UserProfile
  }
`
