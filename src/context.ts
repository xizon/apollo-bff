
import { UserAPI } from './modules/user/datasource'
import { OrderAPI } from './modules/order/datasource'

export async function buildContext({ req }: any) {
  return {
    dataSources: {
      userAPI: new UserAPI(),
      orderAPI: new OrderAPI()
    }
  }
}
