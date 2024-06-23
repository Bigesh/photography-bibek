// // OrderSuccess.jsx
// import React from 'react';

// const OrderSuccess = () => {
//   return (
    
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Order Placed Successfully!</h1>
//       <p>Your order has been successfully placed. Thank you for shopping with us!</p>
//       {/* You can add additional content or links here */}
//     </div>
//   );
// };

// export default OrderSuccess;

import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Order Placed Successfully!</h1>
      <p>Your order has been successfully placed. Thank you for shopping with us!</p>

      <Link to="/" style={{ textDecoration: 'none',  width: "25px"}}>
        <button>Return to Homepage</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
