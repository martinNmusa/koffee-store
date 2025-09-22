import React, { useState } from "react";
import { ShoppingCart, X } from "lucide-react"; // cart + delete icons
import cappuccino from "../../images/cappuccino.jpg";
import espresso from "../../images/espresso.jpg";
import latte from "../../images/latte.jpg";

const CoffeeTypes = () => {
  const products = [
    { id: 1, name: "Cappuccino", price: 250, img: cappuccino, desc: "A rich, foamy blend of espresso and milk." },
    { id: 2, name: "Latte", price: 280, img: latte, desc: "Creamy steamed milk mixed with espresso." },
    { id: 3, name: "Espresso", price: 200, img: espresso, desc: "A bold, concentrated shot of pure coffee." },
  ];

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQty) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: newQty } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = cart.length > 0 ? 150 : 0;
  const finalTotal = totalPrice + deliveryFee;

  const handleCheckout = (method) => {
    setCart([]);
    setCartOpen(false);
    setOrderSuccess(true);
    setTimeout(() => setOrderSuccess(false), 5000); // hide success alert after 5s
    if (method === "mpesa") {
      alert("Pay via M-PESA using Till Number: 123456");
    } else {
      alert("Cash on Delivery selected. Your order is being prepared.");
    }
  };

  return (
    <main className="p-8 relative" id="shop">
      {/* ✅ Success Alert */}
      {orderSuccess && (
        <div className="bg-green-500 text-white font-bold text-xl text-center p-3 rounded mb-4 fixed top-0 left-0 right-0 shadow-md z-50">
          ✅ Order confirmed! Your coffee will be delivered in 20 minutes ☕🚚
        </div>
      )}

      {/* ✅ Navbar with Cart Icon */}
      <div className="flex justify-between items-center mb-6">
         <h1 className="text-3xl font-bold">Sip & Code!</h1>
        <button
          className="relative"
          onClick={() => setCartOpen((prev) => !prev)}
        >
          <ShoppingCart size={28} />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
              {cart.reduce((sum, item) => sum + item.qty, 0)}
            </span>
          )}
        </button>
      </div>

      {/* ✅ Product Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="text-center group hover:shadow-xl hover:scale-105 transform transition duration-300 rounded-lg p-4"
          >
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={product.img}
                alt={product.name}
                className="mx-auto rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-gray-600">{product.desc}</p>
            <p className="font-semibold text-lg mt-2">KES {product.price}</p>
            <button
  onClick={() => addToCart(product)}
  className={`mt-3 px-4 py-2 rounded-lg shadow transition duration-200 ${
    cart.some(item => item.id === product.id)
      ? "bg-green-600 text-white cursor-default"
      : "bg-amber-600 text-white hover:bg-amber-700"
  }`}
  disabled={cart.some(item => item.id === product.id)} // disables button after adding
>
  {cart.some(item => item.id === product.id) ? "Added Check Cart ✓" : "Add to Cart"}
</button>

            
          </div>
        ))}
      </section>

      {/* ✅ Floating Cart Sidebar */}
      {cartOpen && (
        <aside className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl p-6 z-50 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={() => setCartOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mb-3 border-b pb-2"
                >
                  <div>
                    <p>{item.name}</p>
                    <p className="text-sm text-gray-500">
                      KES {item.price} x {item.qty}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => updateQuantity(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <button
                      className="bg-gray-200 px-2 rounded"
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      <X size={18} className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          {cart.length > 0 && (
            <div className="mt-4 border-t pt-4">
              <p className="font-medium">Subtotal: KES {totalPrice}</p>
              <p className="text-gray-500 text-sm">
                Delivery Fee: KES {deliveryFee}
              </p>
              <p className="font-bold text-lg mt-2">Total: KES {finalTotal}</p>

              <button
                onClick={() => handleCheckout("mpesa")}
                className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Pay with M-PESA
              </button>
              <button
                onClick={() => handleCheckout("cash")}
                className="w-full mt-2 bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition duration-200"
              >
                Cash on Delivery
              </button>
            </div>
          )}
        </aside>
      )}
    </main>
  );
};

export default CoffeeTypes;
