import { useState } from 'react'
import Product from '../Product'
import styles from './Products.module.css'

const products = [
  { id: 1, title: 'Gucci Bag', desc: 'Best product out there', price: 3000, img: 'product-img-1.jpg' },
  { id: 2, title: 'Nike Shoe', desc: 'Best shoe out there', price: 2000, img: 'product-img-1.jpg' },
  { id: 3, title: 'Ikea shelve', desc: 'Best product out there', price: 23000, img: 'product-img-1.jpg' },
]

function Products() {


  return (
    <div className={styles['products-container']} >
      {products.map((product, i) => <Product key={i} item={product} />)}
    </div>
  )
}

export default Products