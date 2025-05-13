import { useState, useEffect } from 'react'
import { ProductList } from './components/ProductList'
import { products } from './data/products'
import type { CartItem } from './types/CartItem'
import type { Product } from './types/Product'
import { Cart } from './components/Cart'
import './App.css'



function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems))
  }, [cartItems])

  const handleAddToCart = (product: Product) => {
    setCartItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return

    setCartItems(currentItems =>
      currentItems.map(item =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
    )
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(currentItems =>
      currentItems.filter(item => item.id !== id)
    )
  }


  return (
    <div className="app">
      <header className="app-header">
        <h1>Shop</h1>
        <div className="cart-info">
          Cart Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </div>
      </header>
      <main>
        <ProductList products={products} onAddToCart={handleAddToCart}/>
        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      </main>
    </div>
  )
}

export default App
