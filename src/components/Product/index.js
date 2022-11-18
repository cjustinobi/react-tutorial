import { useDispatch } from 'react-redux'
import { addItem } from '../../redux/cart'
import styles from './Product.module.css'
import productImage from '../../assets/img/product-img-1.jpg'


function Product({ item }) {

  const dispatch = useDispatch()


  return (
    <div className={styles['product-container']}>
      <img src={productImage} alt="product image"/>
      <div>
        <p>{item.title}</p>
        <div className={styles['cart-price']}>
          <span>{item.price}</span>
          <button onClick={() => dispatch(addItem(item))}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product