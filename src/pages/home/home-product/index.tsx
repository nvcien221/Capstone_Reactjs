import React from 'react'
import css from './product.module.scss'
import { useAppSelector } from 'src/redux/store'
import ListCard from 'src/components/listCard'


function HomeProduct() {
  const listProduct = useAppSelector((state) => state.productReducer.listProduct)
  return (
    <div>
      <h2 style={{
        padding: "2rem 0"
      }}>Product Feature</h2>
    
      <ListCard list={listProduct}/>

    </div>
  )
}

export default HomeProduct
