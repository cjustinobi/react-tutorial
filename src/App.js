// import { useContext } from 'react'
import { CartDataContext, CartDataContextProvider } from './CartDataContext'
import Products from './components/Products'
import AppHeader from './components/AppHeader'

function App() {

  // useContext(CartDataContext)

  return (
    <CartDataContextProvider>
      <AppHeader />
      <Products />
    </CartDataContextProvider>
  )
}

export default App
