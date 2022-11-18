import { createSlice } from '@reduxjs/toolkit'

const items = localStorage.getItem('cart')

export const cartSlice = createSlice({
  name: 'cartItems',
  initialState: {
    carts: items ? JSON.parse(items) : []
  },
  reducers: {
    addItem: (state, { payload }) => {

      let existingItemIndex = undefined
      const existingItem = state.carts.find((itm, i) => {
        existingItemIndex = i
        return itm.id === payload.id
      })

      if (existingItem) {
        existingItem.qty ++
        existingItem.subTotal = existingItem.qty * existingItem.price
        state.carts[existingItemIndex] = existingItem

      //  Persist data
        localStorage.setItem('cart', JSON.stringify(state.carts))
      } else {
        payload.qty = 1
        payload.subTotal = payload.price
        state.carts.push(payload)

        //  Persist data
        localStorage.setItem('cart', JSON.stringify(state.carts))
      }
    },

    increment: (state, { payload }) => {
      let itemIndex = undefined
      const item = state.carts.find((item, i) => {
        itemIndex = i
        return item.id === payload
      })
      item.qty ++
      item.subTotal = item.qty * item.price
      state.carts[itemIndex] = item
      localStorage.setItem('cart', JSON.stringify(state.carts))
    },

    decrement: (state, { payload }) => {

      let itemIndex = undefined
      const item = state.carts.find((item, i) => {
        itemIndex = i
        return item.id === payload
      })

      if (item.qty === 1) return

      item.qty --
      item.subTotal = item.qty * item.price
      state.carts[itemIndex] = item
      localStorage.setItem('cart', JSON.stringify(state.carts))
    }

  }
})

export const { addItem, increment, decrement } = cartSlice.actions
export default cartSlice.reducer