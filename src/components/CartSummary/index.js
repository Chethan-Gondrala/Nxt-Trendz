import {Component} from 'react'
import Checkout from '../Checkout'
import CartContext from '../../context/CartContext'
import './index.css'

class CartSummary extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {cartList} = value
          const itemsInCart = cartList.length
          const total = cartList.reduce(
            (initial, item) => initial + item.price * item.quantity,
            0,
          )

          return (
            <div className="whole-summary-container">
              <h1>
                Order Total: <strong>{total}/-</strong>
              </h1>
              <p>{itemsInCart} Items in cart</p>
              <Checkout itemCount={itemsInCart} totalAmount={total} />
            </div>
          )
        }}
      </CartContext.Consumer>
    )
  }
}

export default CartSummary
