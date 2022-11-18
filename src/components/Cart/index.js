import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/cart'
import cartIcon from '../../assets/img/cart-icon.png'
import productImage from '../../assets/img/product-img-1.jpg'
import styles from './Cart.module.css'

function Cart() {

  const dispatch = useDispatch()
  const carts = useSelector(state => state.cart.carts)

  const [showCart, setShowCart] = useState(false)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(carts.reduce((prev, cur) => {
      return prev.subTotal + cur.subTotal
    }, carts[0]))
  }, [carts])

  return (
    <div className={styles['cart-container']}>
      <img onClick={() => setShowCart(!showCart)} src={cartIcon} alt="Cart icon"/>
      <div className={styles.count}>{ total }</div>
      <div className={`${styles['cart-item']} ${showCart ? '' : styles['hide-cart']}`}>
        {carts.length ? carts.map(item => (
          <div className={styles['cart-detail']} key={item.id}>
            <img src={productImage} alt=""/>
            <span>{item.title}</span>
            <span className={styles.qty}>
              <span className={styles['add-minus']} onClick={() => dispatch(increment(item.id))}>
                <span>&#x2b;</span>
              </span>
              <span className={styles['qty-text']}>{item.qty}</span>
              <span className={styles['add-minus']} onClick={() => dispatch(decrement(item.id))}>
                <span>&#x2212;</span>
              </span>
            </span>
            <span>{item.subTotal}</span>
          </div>
        )) : <h3 style={{textAlign: 'center'}}>No item added to cart</h3>}

      </div>

    </div>
  )
}

export default Cart