import { useState } from 'react';
import type { CartItem } from '../types/CartItem';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

export const Cart = ({ items, onUpdateQuantity, onRemoveItem }: CartProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const discount = isCouponApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handleCouponApply = () => {
    if (couponCode === 'WEB3BRIDGECOHORTx') {
      setIsCouponApplied(true);
    } else {
      alert('Invalid coupon code');
    }
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                </div>
                <div className="cart-item-quantity">
                  <button 
                    onClick={() => item.quantity === 1 ? onRemoveItem(item.id) : onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => onRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="coupon-section">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter coupon code"
                disabled={isCouponApplied}
              />
              <button 
                onClick={handleCouponApply}
                disabled={isCouponApplied}
              >
                Apply Coupon
              </button>
            </div>

            <div className="cart-totals">
              <div className="cart-total-row">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {isCouponApplied && (
                <div className="cart-total-row discount">
                  <span>Discount (10%):</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="cart-total-row total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}; 