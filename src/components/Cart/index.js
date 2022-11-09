import { useContext } from 'react'
import { CartDataContext} from '../../CartDataContext'


function Cart() {

  const { cart } = useContext(CartDataContext)


  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  )
}

export default Cart