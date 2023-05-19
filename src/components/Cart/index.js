// Write your JS code here
import './index.css'
import Header from '../Header'

const Cart = () => (
  <>
    <Header />
    <div className="product-cart-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        className="product-cart-pic"
        alt="cart"
      />
    </div>
  </>
)

export default Cart
