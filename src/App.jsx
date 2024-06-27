
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductsContextProvider } from './global/ProductsContext';
import { CartContextProvider } from './global/CartContext';
import { AuthContextProvider } from './global/AuthContext'; // Import AuthContextProvider
import Home from './component/Home';
import Login from './component/Login';
import CreateAccount from './component/CreateAccount';
import Products from './component/Products';
import Cart from './component/Cart';
import AddProduct from './component/AddProduct';
import OrderSuccess from './component/OrderSuccess'; // Import OrderSuccess component
import Booking from './component/Booking';
import Navbar from './component/Navbar';
import CustomerBookings from './component/CustomerBookings';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <AuthContextProvider> {/* Wrap with AuthContextProvider */}
          <BrowserRouter>
          <ToastContainer />
            <Navbar></Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/shop" element={<Products />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/order-success" element={<OrderSuccess />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/customers" element={<CustomerBookings />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;





