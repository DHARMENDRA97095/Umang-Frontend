import { configureStore } from '@reduxjs/toolkit'
import productReaducer from '@/redux/productSlice'

export const makeStore = () =>
  configureStore({
    reducer: {
      products: productReaducer,
    },
  })
