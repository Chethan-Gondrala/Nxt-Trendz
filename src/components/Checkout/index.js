// src/components/PaymentPopup/index.js

import React, {useState} from 'react'
import Popup from 'reactjs-popup'
import './index.css'

const Checkout = ({itemCount, totalAmount}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const isCOD = paymentMethod === 'cod'

  const handleConfirmOrder = () => {
    if (isCOD) setOrderPlaced(true)
  }

  const PaymentOptions = () => (
    <div className="payment-options">
      <h3>Select Payment Method</h3>
      <div>
        <label>
          <input className="diss" type="radio" name="payment" disabled />
          Card
        </label>
        <br />
        <label>
          <input className="diss" type="radio" name="payment" disabled />
          Net Banking
        </label>
        <br />
        <label>
          <input className="diss" type="radio" name="payment" disabled />
          UPI
        </label>
        <br />
        <label>
          <input className="diss" type="radio" name="payment" disabled />
          Wallet
        </label>
        <br />
        <label>
          <input
            className="user-dis"
            type="radio"
            name="payment"
            checked={isCOD}
            onChange={() => setPaymentMethod('cod')}
          />
          Cash on Delivery
        </label>
      </div>
    </div>
  )

  const Summary = () => (
    <div className="summary">
      <h3>Order Summary</h3>
      <p>Items: {itemCount}</p>
      <p>Total Price: ₹{totalAmount}</p>
    </div>
  )

  const SuccessMessage = () => (
    <div className="success-message">
      <h3>✅ Your order has been placed successfully</h3>
      <p className="checkout-message">
        We will deliver your ordered products soon...
      </p>
      <p className="checkout-love">Love from Chethan ❤️</p>
    </div>
  )

  return (
    <Popup modal trigger={<button className="checkout-btn">Checkout</button>}>
      {close => (
        <div className="popup-container">
          {orderPlaced ? (
            <SuccessMessage />
          ) : (
            <>
              <PaymentOptions />
              <Summary />
              <button
                className="confirm-btn"
                disabled={!isCOD}
                onClick={handleConfirmOrder}
              >
                Confirm Order
              </button>
            </>
          )}
        </div>
      )}
    </Popup>
  )
}

export default Checkout
