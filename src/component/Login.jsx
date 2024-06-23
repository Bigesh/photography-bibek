
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './auth.css';
// import { auth } from '../Config/firebaseConfig';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       console.log('User logged in:', userCredential.user);
//       localStorage.setItem('userToken', userCredential.user.uid); // Store user UID in localStorage
//       navigate('/'); // Redirect to home page after successful login
//     } catch (error) {
//       setError(error.message);
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <div className="auth-wrapper">
//       <h2>Login</h2>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div className="input-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account? <Link to="/create-account">Create Account</Link>
//       </p>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { auth } from '../Config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      localStorage.setItem('accessToken', userCredential.user.uid); // Store user UID in localStorage
      navigate('/');
    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    }
  };

  return (
    <div className="auth-wrapper">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/create-account">Create Account</Link>
      </p>
    </div>
  );
};

export default Login;
