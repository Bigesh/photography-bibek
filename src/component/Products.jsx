
// // import React, { useContext } from 'react';
// // import { ProductsContext } from '../global/ProductsContext';
// // // import { CartContext } from '../global/CartContext'; // Ensure this path is correct

// // const Products = () => {
// //     const { products } = useContext(ProductsContext);
// //     console.log(products);
// //     //const { dispatch } = useContext(CartContext);

// //     return (
// //         <>
// //             {products.length !== 0 && <h1>Products</h1>}
// //             <div className='products-container'>
// //                 {products.length === 0 && <div>slow internet...no products to display</div>}
// //                 {products.map(product => (
// //                     <div className='product-card' key={product.ProductID}>
// //                         <div className='product-img'>
// //                             <img src={product.ProductImg} alt="not found" />
// //                         </div>
// //                         <div className='product-name'>
// //                             {product.ProductName}
// //                         </div>
// //                         <div className='product-price'>
// //                             Rs {product.ProductPrice}.00
// //                         </div>
// //                         <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>
// //                             ADD TO CART
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>
// //         </>
// //     );
// // };

// // export default Products;
// import React, { useContext } from 'react';
// import { ProductsContext } from '../global/ProductsContext';
// import './Shop.css'
// //import { CartContext } from '../global/CartContext'; // Ensure this path is correct

// const Products = () => {
//     const { products } = useContext(ProductsContext);
//     //const { dispatch } = useContext(CartContext);

//     console.log(products);

//     return (
//         <>
//             {products.length !== 0 && <h1>Products</h1>}
//             <div className='products-container'>
//                 {products.length === 0 && <div>slow internet...no products to display</div>}
//                 {products.map(product => (
//                     <div className='product-card' key={product.ProductID}>
//                         <div className='product-img'>
//                             <img src={product.ProductImg} alt="not found" />
//                         </div>
//                         <div className='product-name'>
//                             {product.ProductName}
//                         </div>
//                         <div className='product-price'>
//                             Rs {product.ProductPrice}.00
//                         </div>
//                         <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>
//                             ADD TO CART
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default Products;

import React, { useContext } from 'react';
import { ProductsContext } from '../global/ProductsContext';
import { useCart } from '../global/CartContext'; // Import useCart hook
import './Shop.css';
import { Navbar } from './Navbar';
import { useAuth } from '../global/AuthContext';
import { useNavigate } from 'react-router-dom';


const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useCart(); // Get dispatch function from CartContext
  const { user} = useAuth();
  const navigate = useNavigate();

  console.log(products);

  const addToCart = (product) => {
    if(user){
      dispatch({ type: 'ADD_TO_CART', product });
    }
    else{
      navigate('/signin');
    }
  };

  return (
    <>
   <div className='shop-container'>
      {products.length !== 0 && <h1>Products</h1>}
      <div className='products-container'>
        {products.length === 0 && <div>slow internet...no products to display</div>}
        {products.map(product => (
          <div className='product-card' key={product.ProductID}>
            <div className='product-img'>
              <img src={product.ProductImg} alt="not found" />
            </div>
            <div className='product-name'>
              {product.ProductName}
            </div>
            <div className='product-price'>
              Rs {product.ProductPrice}.00
            </div>
            <button className='addcart-btn' onClick={() => addToCart(product)}>
              ADD TO CART
            </button>
          </div>
        ))}
      </div>
      </div>
      
    </>
  );
};

export default Products;




