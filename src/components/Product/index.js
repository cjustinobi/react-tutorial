
import { useContext } from 'react'
import styles from './Product.module.css'
import productImage from '../../img/product-img.jpg'
import { CartDataContext } from '../../CartDataContext'

function Product({ item }) {

  const { setCart } = useContext(CartDataContext)

  const cartHandler = (val) => {
    setCart(cart => [...cart, val]);
  }

  return (
    <div className={styles['product-container']}>
      <img src={productImage} alt="product image"/>
      <div>
        <p>{item.title}</p>
        <div className={styles['cart-price']}>
          <span>{item.price}</span>
          <button onClick={() => cartHandler(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product