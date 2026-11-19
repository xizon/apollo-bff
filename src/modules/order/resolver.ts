
export const orderResolvers = {
  Query: {
    orders: async () => ([
      { id: 'o1', status: '已支付' },
      { id: 'o2', status: '已发货' }
    ])
  }
}
