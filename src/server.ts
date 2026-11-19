
import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { json } from 'body-parser'

import { buildContext } from './context'
import { userSchema } from './modules/user/schema'
import { userResolvers } from './modules/user/resolver'
import { orderSchema } from './modules/order/schema'
import { orderResolvers } from './modules/order/resolver'

export async function startServer() {
  const app = express()

  const server = new ApolloServer({
    typeDefs: [userSchema, orderSchema],
    resolvers: [userResolvers, orderResolvers]
  })

  await server.start()

  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: buildContext
    })
  )

  app.listen(4000, () => {
    console.log('🚀 BFF ready at http://localhost:4000/graphql')
  })
}
