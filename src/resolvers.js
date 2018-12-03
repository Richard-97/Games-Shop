const resolvers = {
    Query: {},
    Mutation: {
      updateFinderData: (_, {finderData}, {cache})=>{
        cache.writeData({
          data: {
            finder: {
              __typename: 'FinderData',
              finderData
            }
          }
        });
        return null;
      },

      updateUserData: (_, {userData}, {cache}) => {
        cache.writeData({
          data: {
            user: {
              __typename: 'UserData',
              userData
            }
          }
        });
        return null;
      },
      updatePriceData: (_, {priceData,gameName}, {cache}) => {
        cache.writeData({
          data: {
            price: {
              __typename: 'PriceData',
              priceData,
              gameName
            }
          }
        });
        return null;
      },
    },
}

export default resolvers;