const defaults = {
    networkStatus:{
      __typename: 'NetworkStatus',
      isConnected: ''
    },
    finder:{
      __typename: 'FinderData',
      finderData: ''
    },
    user: {
      __typename: 'UserData',
      userData: ''
    },
    price: {
      __typename: 'PriceData',
      priceData: 0,
      gameName: ''
    }

  }

export default defaults;