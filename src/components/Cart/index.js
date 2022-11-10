import {useContext, useEffect} from 'react'
import { CartDataContext} from '../../CartDataContext'
import cartIcon from '../../assets/img/cart-icon.png'

import styles from './Cart.module.css'

function Cart() {

  const { cart } = useContext(CartDataContext)


  useEffect(() => {
    if (cart.length) {

    }
  }, [cart])

  return (
    <div className={styles['cart-container']}>
      <img src={cartIcon} alt="Cart icon"/>
      <div className={styles.count}>3</div>
      {/*{cart.map(item => (*/}
      {/*  <div key={item.id}>{item.title}</div>*/}
      {/*))}*/}
    </div>
  )
}

export default Cart