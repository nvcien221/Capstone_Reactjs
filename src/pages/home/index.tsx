import React, { useEffect } from 'react'
import HomeCarousel from './home-carousel'
import HomeProduct from './home-product'
import { getAllProduct } from 'src/services/product.service'
import { useSelector, useDispatch } from 'react-redux'
import { setListProduct } from 'src/redux/slices/product.slice'
import {useAppSelector } from 'src/redux/store'

export default function Home() {
  const listProduct = useAppSelector((state) =>{
    return state.productReducer.listProduct
    
  })
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      const resp = await getAllProduct()
      const action = setListProduct(resp.content)
      dispatch(action)
    })()
  }, [])

  return (
    <div>
      <HomeCarousel />
      <HomeProduct />
    </div>
  )
}
