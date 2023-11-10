import React, { useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import { getProductById } from 'src/services/product.service'
import ListCard from 'src/components/listCard'
import css from './detail.module.scss'
import { useCartContext } from 'src/components/context/cartContext'
import { useFormik } from 'formik'
import { order } from 'src/services/user.service'

type TParams = {
  productID: string
}
export interface IProduct {
  id: number
  name: string
  alias: string
  price: number
  feature: boolean
  description: string
  size: string[]
  shortDescription: string
  quantity: number
  image: string
  categories: Category[]
  relatedProducts: RelatedProduct[]
}

interface Category {
  id: string
  category: string
}

interface RelatedProduct {
  id: number
  name: string
  alias: string
  feature: boolean
  price: number
  description: string
  shortDescription: string
  image: string
}
export default function Detail() {
  const param = useParams<TParams>()
  const [productItem, setProductItem] = useState<IProduct>()
  const {addToCart, updateQuantityDetail, cartQuantityDetail, setCartQuantityDetail} = useCartContext()

  const formik = useFormik({
    initialValues: {
      orderDetail: [
        {
          productId: '',
          quantity: 0
        }
      ],
      email:""
    },
    onSubmit: async (values) => {
      try {
        const response = await order(values); 
        console.log('Order placed successfully:', response);

      } catch (error) {
        console.error('Error placing order:', error);
       
      }
    },
  });
  
  useEffect(() => {
    if (!param.productID) return
    getProductById(param.productID).then((resp) => {
      setProductItem(resp.content)
      setCartQuantityDetail(1); 
    })
    .catch((err) => { console.log(err) })

  }, [param.productID])

  const handleAddtoCarts = () =>{
    if(productItem){
      addToCart(productItem)
    }
    
  }


  return (
    <div className={css['detail']}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '3rem 0' }}>
        <div className={css['product-img-div']}>
          <img className={css['product-img']} style={{ width: 400, height: 400 }} src={productItem?.image} />
        </div>
        <div className='content'>
          <h3>{productItem?.name}</h3>
          <p style={{margin: '20px 0'}}>{productItem?.shortDescription}</p>

          <div className={css['size-container']}>
            {productItem?.size.map((item, index) => {
              return (
                <button className={css['button-size']} key={index}>
                  <span className={css['size']}><a href="#">{item}</a></span>
                </button>
              )
            })}
          </div>
          <h3 style={{color: 'red', marginTop: '20px', marginBottom:0}}>{productItem?.price}$</h3>

          <div className={css['button-quantity']}>
            {cartQuantityDetail > 1 ? <button onClick={()=> productItem?.id !== undefined && updateQuantityDetail(productItem?.id, -1)} className={css['minus']}>-</button> : <button className={css['minus']}>-</button>}
            <span style={{margin: '0 10px'}}>{cartQuantityDetail}</span>
            <button onClick={()=> productItem?.id !== undefined && updateQuantityDetail(productItem?.id, 1)} className={css['plus']}>+</button>
          </div>

          <div className={css['add-to-card']}>
            <form onSubmit={formik.handleSubmit}>
              <button type='submit' onClick={handleAddtoCarts} className={css['button-add']}>Add to cart</button>
            </form>
            
          </div>

        </div>
      </div>
      <div className={css['realate-product']}>
        <h2 style={{textAlign: 'center', marginBottom:30}}>- Realate Product -</h2>

        {productItem?.relatedProducts && <ListCard list={productItem.relatedProducts} />}

      </div>
    </div>
  )
}
