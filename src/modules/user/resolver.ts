
export const userResolvers = {
  Query: {
    currentUser: async () => ({
      id: '1',
      name: '测试用户',
      isVip: true
    })
  }
}
