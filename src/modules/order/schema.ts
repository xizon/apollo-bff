
import { gql } from 'graphql-tag'
export const orderSchema = gql`
  type Order {
    id: ID!
    status: String!
  }
  extend type Query {
    orders: [Order!]!
  }
`
