```markdown
# 🛒 Product Page with Shopping Cart - React

This is a simple **React-based product listing and cart management page** built using functional components and Bootstrap. It allows users to browse a list of products, add them to a cart, update quantities, and remove items.

## 🚀 Features

- Display of multiple mobile products with images and prices.
- Add items to a shopping cart.
- Automatically increase quantity for already added items.
- Decrease quantity or remove items from the cart.
- Live cart preview with total calculation per item.
- Responsive layout using Bootstrap.

## 🧩 Tech Stack

- **React (useState Hook)**
- **Bootstrap (for styling and layout)**
- **Basic JavaScript logic for cart management**

## 📁 File Structure

```
ProductPage/
│
├── public/
│   └── image/
│       ├── i-14.jpg
│       ├── s-22.jpg
│       ├── one-10.jpg
│       ├── pixel-7.jpg
│       ├── xiomi-13.jpg
│       ├── realme gt.jpg
│       └── x20.jpg
│
├── ProductPage.jsx  // This component file
└── README.md
```

## 🧠 Component Logic

### Product Listing

A static array of product objects, each containing:
```js
{ id, name, price, img }
```

Displayed as Bootstrap cards in a grid layout.

### State Management

```js
const [cart, setCart] = useState([]);
```

Tracks items currently in the user's cart, each with a `quantity`.

## 📦 Cart Functionalities

### Add to Cart
- If item exists → increase quantity.
- Else → add new item with `quantity: 1`.

### Decrease Quantity
- Decrease item quantity by 1.
- Remove item if quantity drops to `0`.

### Delete Item
- Permanently removes item from cart.

## 📷 UI Preview

> 💡 Screenshots or a GIF of the UI can be added here if desired.

## ✅ Usage

1. Make sure Bootstrap is included in your project.
2. Import and use the component:

```js
import ProductPage from './ProductPage';

function App() {
  return <ProductPage />;
}
```

## 📌 Notes

- Images must exist in the specified `/public/image` folder.
- Bootstrap icons (for `bi-dash` and `bi-trash`) must be loaded via CDN or npm.
```
