
import { useContext } from 'react'
import styles from './Product.module.css'
import productImage from '../../assets/img/product-img.jpg'
import { CartDataContext } from '../../CartDataContext'

const Product =({ item }) => {

  const { setCart } = useContext(CartDataContext)

  const cartHandler = (item) => {
    setCart(cart => {
      // debugger
      let oldItemIndex = undefined
      const oldItem = cart.find((itm, i) => {
        oldItemIndex = i
        return itm.id === item.id
      })
      if (oldItem) {
        let cartCopy = [...cart]
        console.log('first old item ', oldItem)
        oldItem.qty += 1
         console.log('second old item ', oldItem)

        cartCopy[oldItemIndex] = oldItem
        return cartCopy
      } else {
        item.qty = 1
        return [...cart, item]
      }

    })

    // setCart(cart => [...cart, item]);
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