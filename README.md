# Shopping Cart Application

A modern, responsive shopping cart application built with React, TypeScript, and Vite. This application provides a seamless shopping experience with features like cart management, quantity adjustment, and coupon application.

## Features

- Browse a variety of products with images and descriptions
- Add items to your shopping cart
- Adjust item quantities
- Remove items from cart
- Apply discount coupon and get 10% discount (WEB3BRIDGECOHORTx)
- Persistent cart data (saved in localStorage)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone git@github.com:LakunleD/shopping-cart.git
cd shopping-cart
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## How to Use

### Browsing Products

- The main page displays a grid of available products
- Each product card shows:
  - Product image
  - Product name
  - Description
  - Price
  - "Add to Cart" button

### Managing Your Cart

1. **Adding Items**
   - Click the "Add to Cart" button on any product card
   - The item will be added to your cart with a quantity of 1

2. **Adjusting Quantities**
   - Use the "+" and "-" buttons in the cart to adjust item quantities
   - Clicking "-" when quantity is 1 will remove the item
   - The cart total updates automatically

3. **Removing Items**
   - Click the "Remove" button next to any item to remove it from the cart
   - Alternatively, use the "-" button to reduce quantity to zero

4. **Applying Coupons**
   - Enter a coupon code in the coupon input field
   - Click "Apply Coupon" to apply the discount
   - Current valid coupon: `WEB3BRIDGECOHORTx` (10% discount)
   - The discount will be reflected in the cart total

### Cart Summary

The cart summary shows:
- Subtotal (before discount)
- Discount amount (if coupon applied)
- Total amount (after discount)

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Project Structure

```
src/
├── components/     # React components
├── types/         # TypeScript type definitions
├── data/          # Static data (products)
└── App.tsx        # Main application component
```

## Technologies Used

- React
- TypeScript
- Vite
- CSS (with responsive design)
- LocalStorage for data persistence

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.