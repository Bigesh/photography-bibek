// // import React from 'react';
// import { useCart } from '../global/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.ProductPrice * item.qty, 0);
//   };

//   const grandTotal = getTotalPrice();

//   return (
//     <div className='cart-container'>
//       <h2 className='cart-header'>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div className='cart-item' key={item.ProductID}>
//               <img src={item.ProductImg} alt="Product" />
//               <div className='cart-item-details'>
//                 <div className='cart-item-name'>{item.ProductName}</div>
//                 <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                 <div className='cart-item-price'>Price: Rs {item.ProductPrice}.00</div>
//               </div>
//               <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//             </div>
//           ))}
//           <div className='cart-summary'>
//             <h3>Grand Total: Rs {grandTotal}.00</h3>
//           </div>
//           <div className='cart-buttons'>
//             <button onClick={clearCart}>Clear Cart</button>
//             <button onClick={() => alert('Proceed to checkout')}>Checkout</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React from 'react';
// import { useCart } from '../global/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.ProductPrice * item.qty, 0);
//   };

//   const grandTotal = getTotalPrice();
//   const shipping = 8; // Example shipping cost
//   const estimatedTax = 0; // Example tax cost
//   const total = grandTotal + shipping + estimatedTax;

//   return (
//     <div className='cart-container'>
//       <h2 className='cart-header'>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div className='cart-item' key={item.ProductID}>
//               <img src={item.ProductImg} alt="Product" />
//               <div className='cart-item-details'>
//                 <div className='cart-item-name'>{item.ProductName}</div>
//                 <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                 <div className='cart-item-price'>Price: Rs {item.ProductPrice}.00</div>
//               </div>
//               <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//             </div>
//           ))}
//           <div className='cart-summary'>
//             <div>
//               <span>Subtotal</span>
//               <span>Rs {grandTotal}.00</span>
//             </div>
//             <div>
//               <span>Estimated Shipping & Handling</span>
//               <span>Rs {shipping}.00</span>
//             </div>
//             <div>
//               <span>Estimated Tax</span>
//               <span>Rs {estimatedTax}.00</span>
//             </div>
//             <div>
//               <strong>Total</strong>
//               <strong>Rs {total}.00</strong>
//             </div>
//           </div>
//           <div className='cart-buttons'>
//             <button className='clear-button' onClick={clearCart}>Clear Cart</button>
//             <button className='checkout-button' onClick={() => alert('Proceed to checkout')}>Checkout</button>
//             <button className='paypal-button' onClick={() => alert('Proceed to PayPal')}>PayPal</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

// import React, { useState } from 'react';
// import { useCart } from '../global/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, dispatch } = useCart();
//   const [modalItem, setModalItem] = useState(null);

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.ProductPrice * item.qty, 0);
//   };

//   const grandTotal = getTotalPrice();
//   const shipping = 8; // Example shipping cost
//   const estimatedTax = 0; // Example tax cost
//   const total = grandTotal + shipping + estimatedTax;

//   const openModal = (item) => {
//     setModalItem(item);
//   };

//   const closeModal = () => {
//     setModalItem(null);
//   };

//   return (
//     <div className='cart-container'>
//       <h2 className='cart-header'>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div className='cart-item' key={item.ProductID}>
//               <img src={item.ProductImg} alt="Product" />
//               <div className='cart-item-details'>
//                 <div className='cart-item-name'>{item.ProductName}</div>
//                 <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                 <div className='cart-item-price'>Price: Rs {item.ProductPrice}.00</div>
//               </div>
//               <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//               <button onClick={() => openModal(item)}>Preview</button>
//             </div>
//           ))}
//           <div className='cart-summary'>
//             <div>
//               <span>Subtotal</span>
//               <span>Rs {grandTotal}.00</span>
//             </div>

//             <div>
//               <strong>Total</strong>
//               <strong>Rs {total}.00</strong>
//             </div>
//           </div>
//           <div className='cart-buttons'>
//             <button className='clear-button' onClick={clearCart}>Clear Cart</button>
//             <button className='checkout-button' onClick={() => alert('Proceed to checkout')}>Checkout</button>

//           </div>
//         </>
//       )}

//       {modalItem && (
//         <div className='modal' onClick={closeModal}>
//           <div className='modal-content' onClick={(e) => e.stopPropagation()}>
//             <span className='close' onClick={closeModal}>&times;</span>
//             <img src={modalItem.ProductImg} alt={modalItem.ProductName} style={{ width: '100%' }} />
//             <h2>{modalItem.ProductName}</h2>
//             <p>Price: Rs {modalItem.ProductPrice}.00</p>
//             <p>Quantity: {modalItem.qty}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
// import React, { useState } from 'react';
// import { useCart } from '../global/CartContext';
// import './Cart.css';

// const Cart = () => {
//   const { cart, dispatch } = useCart();
//   const [modalItem, setModalItem] = useState(null);

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.ProductPrice * item.qty, 0);
//   };

//   const grandTotal = getTotalPrice();
//   const shipping = 8; // Example shipping cost
//   const estimatedTax = 0; // Example tax cost
//   const total = grandTotal + shipping + estimatedTax;

//   const openModal = (item) => {
//     setModalItem(item);
//   };

//   const closeModal = () => {
//     setModalItem(null);
//   };

//   return (
//     <div className='cart-container'>
//       <h2 className='cart-header'>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <>
//           {cart.map(item => (
//             <div className='cart-item' key={item.ProductID}>
//               <img src={item.ProductImg} alt="Product" onClick={() => openModal(item)} />
//               <div className='cart-item-details'>
//                 <div className='cart-item-name'>{item.ProductName}</div>
//                 <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                 <div className='cart-item-price'>Price: Rs {item.ProductPrice}.00</div>
//               </div>
//               <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//             </div>
//           ))}
//           <div className='cart-summary'>
//             <div>
//               <span>Subtotal</span>
//               <span>Rs {grandTotal}.00</span>
//             </div>
//             <div>
//               <span>Estimated Shipping & Handling</span>
//               <span>Rs {shipping}.00</span>
//             </div>
//             <div>
//               <span>Estimated Tax</span>
//               <span>Rs {estimatedTax}.00</span>
//             </div>
//             <div>
//               <strong>Total</strong>
//               <strong>Rs {total}.00</strong>
//             </div>
//           </div>
//           <div className='cart-buttons'>
//             <button className='clear-button' onClick={clearCart}>Clear Cart</button>
//             <button className='checkout-button' onClick={() => alert('Proceed to checkout')}>Checkout</button>
//             <button className='paypal-button' onClick={() => alert('Proceed to PayPal')}>PayPal</button>
//           </div>
//         </>
//       )}

//       {modalItem && (
//         <div className='modal' onClick={closeModal}>
//           <div className='modal-content' onClick={(e) => e.stopPropagation()}>
//             <span className='close' onClick={closeModal}>&times;</span>
//             <img src={modalItem.ProductImg} alt={modalItem.ProductName} style={{ width: '100%' }} />
//             <h2>{modalItem.ProductName}</h2>
//             <p>Price: Rs {modalItem.ProductPrice}.00</p>
//             <p>Quantity: {modalItem.qty}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;

// Cart.jsx
// In your Cart.jsx or wherever you use it:

// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../global/CartContext'; // Adjust the import as per your context setup
// import { useAuth } from '../global/AuthContext'; // Adjust the import as per your context setup
// import './Cart.css';
// import { Navbar } from './Navbar';

// const Cart = () => {
//   const { cart, dispatch } = useCart(); // Example: Custom hook to access cart state
//   const { user } = useAuth(); // Example: Custom hook to access authentication state
//   const navigate = useNavigate();

//   useEffect(() => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (accessToken && !user) {
//       // Token exists in localStorage but user is not logged in
//       // Simulate login or re-authentication logic here
//       console.log('User logged in automatically');
//       // Simulating setting user state after successful authentication
//       // Replace with actual logic to set user state after authentication
//       // setUser(user); // Uncomment and replace with actual logic if needed
//       navigate('/order-success'); // Redirect to order success page after login
//     }
//   }, [user, navigate]);

//   const handleCheckout = () => {
//     const accessToken = localStorage.getItem('accessToken');
//     if (!accessToken) {
//       navigate('/signin'); // Redirect to signin page if accessToken is not present
//     } else {
//       // Proceed with checkout logic here
//       console.log('Proceed to checkout');
//       dispatch({ type: 'CLEAR_CART' }); // Example: Clear cart after successful checkout
//       navigate('/order-success'); // Redirect to order success page
//     }
//   };

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.ProductPrice * item.qty, 0);
//   };

//   const grandTotal = getTotalPrice();

//   return (
//     <div className='cart-wrapper'>
//       <div className='cart-container'>
//         <h1 className='cart-header'>Shopping Cart</h1>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//             <Navbar />
//             {cart.map(item => (
//               <div className='cart-item' key={item.ProductID}>
//                 <img src={item.ProductImg} alt="Product" />
//                 <div className='cart-item-details'>
//                   <div className='cart-item-name'>{item.ProductName}</div>
//                   <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                   <div className='cart-item-price'>Price: Rs {item.ProductPrice}.00</div>
//                 </div>
//                 <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//               </div>
//             ))}
//             <div className='cart-summary'>
//               <div>
//                 <strong>Subtotal</strong>
//                 <strong>Rs {grandTotal}.00</strong>
//               </div>
//             </div>
//             <div className='cart-buttons'>
//               <button className='clear-button' onClick={clearCart}>Clear Cart</button>
//               <button className='checkout-button' onClick={handleCheckout}>Checkout</button>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;
// import React from 'react';
// import { useCart } from '../global/CartContext';
// import './Cart.css';
// import { Navbar } from './Navbar';

// const Cart = () => {
//   const { cart, dispatch } = useCart();

//   const removeFromCart = (id) => {
//     dispatch({ type: 'REMOVE_FROM_CART', id });
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const calculateTotal = () => {
//     return cart.reduce((acc, item) => acc + item.ProductPrice * item.qty, 0).toFixed(2);
//   };

//   return (

//     <div className='cart-container'>

//       <div className='cart-details'>
//         <h2 className='cart-header'>Shopping Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <>
//           <Navbar/>
//             {cart.map(item => (
//               <div className='cart-item' key={item.ProductID}>
//                 <img src={item.ProductImg} alt="Product" />
//                 <div className='cart-item-details'>
//                   <div className='cart-item-name'>{item.ProductName}</div>
//                   <div className='cart-item-quantity'>Quantity: {item.qty}</div>
//                 </div>
//                 <div className='cart-item-price'>Rs {(item.ProductPrice * item.qty).toFixed(2)}</div>
//                 <button onClick={() => removeFromCart(item.ProductID)}>Remove</button>
//               </div>
//             ))}
//             <div className='cart-buttons'>
//               <button onClick={clearCart}>Clear Cart</button>
//             </div>
//           </>
//         )}
//       </div>
//       <div className='cart-summary'>
//         <h3>Summary</h3>
//         <p>Subtotal: <span>Rs {calculateTotal()}</span></p>
//         <p className='total'>Total: <span>Rs {calculateTotal()}</span></p>
//         <button className='checkout-button'>Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useState } from "react";
import { useCart } from "../global/CartContext";
import "./Cart.css";
import { Navbar } from "./Navbar";
import { toast } from "react-toastify";
import { storage } from "../Config/firebaseConfig";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import firebase from "firebase/compat/app";

const Cart = () => {
  const { cart, dispatch, saveyourcart, savedCart } = useCart();
  
  const [ischekingout, setIscheckingOut] = useState(false);
  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const calculateTotal = () => {
    return cart
      .reduce((acc, item) => acc + item.ProductPrice * item.qty, 0)
      .toFixed(2);
  };

  function checkoutHandler() {
    setIscheckingOut(true);
    setTimeout(() => {
      toast.success("thankyou for purchasing");
      saveyourcart(cart);
      clearCart();
      setIscheckingOut(false);
    }, 1500);
  }

  const extractPathFromUrl = (url) => {
    const urlObject = new URL(url);
    const path = decodeURIComponent(urlObject.pathname.split('/o/')[1]);
    return path;
  };

  const downloadImage = (item) => {
    const downloadURL = item?.ProductImg;
    const storage = getStorage();
    getDownloadURL(ref(storage,extractPathFromUrl(item.ProductImg)))
      .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = (event) => {
      const blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.setAttribute('src', url);
  })
  .catch((error) => {
    // Handle any errors
  });
   
  };



  return (
    <>
      <div className="cart-container">
        <div className="cart-details">
          <h2 className="cart-header">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div className="cart-item" key={item.ProductID}>
                  <img src={item.ProductImg} alt="Product" />
                  <div className="cart-item-details">
                    <div className="cart-item-name">{item.ProductName}</div>
                    <div className="cart-item-quantity">
                      Quantity: {item.qty}
                    </div>
                  </div>
                  <div className="cart-item-price">
                    Rs {(item.ProductPrice * item.qty).toFixed(2)}
                  </div>
                  <button onClick={() => removeFromCart(item.ProductID)}>
                    Remove
                  </button>
                </div>
              ))}
              <div className="cart-buttons">
                <button onClick={clearCart}>Clear Cart</button>
              </div>
            </>
          )}
        </div>
        <div className="cart-summary">
          <h3>Summary</h3>
          <p>
            Subtotal: <span>Rs {calculateTotal()}</span>
          </p>
          <p className="total">
            Total: <span>Rs {calculateTotal()}</span>
          </p>
          <button className="checkout-button" onClick={() => checkoutHandler()}>
            {ischekingout ? "checking out ..." : "Checkout"}
          </button>
        </div>
      </div>
      {savedCart?.length > 0 && (
        <div className="purchases">
          <h3 className="text-orange">Download your Purchases</h3>
          <div className="downloadsPanel wrapper">
          
            {savedCart.map((item,index) => {
              return( <div className="downloadsPanel__card" key={index}>
                <img src={item?.ProductImg} alt="" />
                <h3>{item?.ProductName}</h3>
                <p>Price:<span>Rs.{item.ProductPrice}</span></p>
                <p>Quantity : <span>{item.qty}</span></p>
                <button className="submitBtn" onClick={()=>downloadImage(item)}>Download</button>
              </div>);
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
