import { useState, useEffect } from 'react'
import { ProductList } from './components/ProductList'
import { products } from './data/products'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Shop</h1>
      </header>
      <main>
        <ProductList products={products}/>
      </main>
    </div>
  )
}

export default App
