
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



function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <AuthContextProvider> {/* Wrap with AuthContextProvider */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Login />} />
              <Route path="/shop" element={<Products />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addproduct" element={<AddProduct />} />
              <Route path="/order-success" element={<OrderSuccess />} />
            </Routes>
          </BrowserRouter>
        </AuthContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;





