import Header from '../Header'

import './index.css'

const Checkout = () => {
  return (
    <div>
      <Header />
      <div className="checkout-container">
        <h1 className="checkout-heading">
          Thank You for Ordering on our Website
        </h1>
        <p className="checkout-message">
          We will deliver your ordered products soon...
        </p>
        <p className="checkout-love">Love from Chethan ❤️</p>
      </div>
    </div>
  )
}

export default Checkout
