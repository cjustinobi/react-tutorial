
import styles from './Product.module.css'
import productImage from '../../img/product-img.jpg'

function Product({ item, addToCart }) {



  return (
    <div className={styles['product-container']}>
      <img src={productImage} alt="product image"/>
      <div>
        <p>{item.title}</p>
        <div className={styles['cart-price']}>
          <span>{item.price}</span>
          <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product