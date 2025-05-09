import React, { useState } from 'react';


const products = [
  { id: 1, name: "iPhone 14", price: 59999, img: "./public/image/i-14.jpg" },
  { id: 2, name: "Samsung Galaxy S22", price: 69999, img: "./public/image/s-22.jpg" },
  { id: 3, name: "OnePlus 10", price: 35999, img: "./public/image/one-10.jpg" },
  { id: 4, name: "Google Pixel 7", price: 79999, img: "./public/image/pixel-7.jpg" },
  { id: 5, name: "Xiaomi 13 Pro", price: 15999, img: "./public/image/xiomi-13.jpg" },
  { id: 6, name: "Realme GT", price: 24999, img: "./public/image/realme gt.jpg" },
  { id: 7, name: "Motorola Edge", price: 14599, img: "./public/image/one-10.jpg" },
  { id: 8, name: "Nokia X20", price: 13999, img: "./public/image/one-10.jpg" },
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);

   const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } 
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
            .filter((item) => item.quantity > 0)
  );
};



  const handleDelete = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Page</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 border overflow-hidden bg-black">
              <img src={product.img} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title text-white">{product.name}</h5>
                <h3 className="card-text text-white">₹ {product.price}</h3>
                <button 
                  className="btn btn-primary w-100" 
                  onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <>
          <h3 className="mt-5 mb-3">Cart Items</h3>
          <div className="d-flex flex-column gap-3 mb-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center justify-content-between border p-3 rounded shadow-sm px-5"
              >
                {/* Image */}
                <div style={{ width: "150px" }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded"
                  />
                </div>

                {/* Name */}
                <div className="text-center">
                  <h5>{item.name}</h5>
                </div>

                {/* Price */}
                <div className="px-3 text-center">
                  <span className="fw-bold">Price : {item.price}</span>
                </div>

                {/* Quantity & Total */}
                <div className="px-3 text-center">
                  <span className="fw-bold">
                    ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
                  </span>
                </div>

            <div className="px-3 d-flex align-items-center gap-2">
              <button
              onClick={() => decreaseQuantity(item.id)}
              className="btn btn-warning btn-sm"
              >
              <i className="bi bi-dash"></i>
              </button>

      {/* Delete Button */}
              <button
              onClick={() => handleDelete(item.id)}
              className="btn btn-danger btn-sm"
              >
              <i className="bi bi-trash"></i>
              </button>
            </div>
            </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
