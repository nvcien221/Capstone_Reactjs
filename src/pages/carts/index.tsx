
import React from 'react';
import { useCartContext } from 'src/components/context/cartContext';
import css from './cart.module.scss'
import { axiosWithAuth } from 'src/services/config.service';
import { getLocalStorage} from 'src/utils';
function Cart() {
  const { cartItems, updateCartItemQuantity, remove} = useCartContext();

  const removeItem = (itemId: number) => {
    const confirmDelete = window.confirm("Are you sure you want to remove this item?");
    if (confirmDelete) {
      remove(itemId)
    }
  };
  
  return (
    <div className={css['cart']}>
      <h1 style={{ textAlign: 'center', margin: '50px 0' }}>Your Cart</h1>
      <table style={{ width: '100%' }}>
        <thead>
          <tr className={css['cart-title']}>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td ><img src={item.image} /></td>
              <td>{item.price} $</td>
              <td>
                {item.quantity > 1 ? <button onClick={() => updateCartItemQuantity(item.id, -1)} className={css['minus']}>-</button> : <button onClick={() => removeItem(item.id)} className={css['minus']}>-</button>}
                
                <span className={css['cart-quantity']}>{item.quantity}</span>
                <button onClick={() => updateCartItemQuantity(item.id, 1)} className={css['plus']}>+</button>
              </td>
              <td>{(item.price * item.quantity).toLocaleString()} $</td>
              <td><button onClick={() => removeItem(item.id)} className={css['button-delete']}>Delete</button></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Cart
