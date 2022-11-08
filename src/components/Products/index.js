import { useState } from 'react'
import Product from '../Product'
import styles from './Products.module.css'

const products = [
  { id: 1, title: 'Gucci Bag', desc: 'Best product out there', price: 3000 },
  { id: 2, title: 'Nike Shoe', desc: 'Best shoe out there', price: 2000 },
  { id: 3, title: 'Ikea shelve', desc: 'Best product out there', price: 23000 },
]

function Products() {

  let [count, setCount] = useState(0)
  const [cart, setCart] = useState([])

  const cartHandler = (val) => {
    setCart(cart => [...cart, val]);
  }


  return (
    <div className={styles['products-container']} >
      {products.map(product => <Product addToCart={val => cartHandler(val)} item={product} />)}
    </div>
  )
}

export default Products