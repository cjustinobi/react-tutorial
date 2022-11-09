import { createContext, useState} from 'react'

// const [cart, setCart] = useState([])

const CartDataContext = createContext(undefined)

const CartDataContextProvider = ({ children }) => {

  const [cart, setCart] = useState([])


  return (
    <CartDataContext.Provider value={{ cart, setCart }}>
      {children}
    </CartDataContext.Provider>
  )
}

export { CartDataContext, CartDataContextProvider }
