// import './assets/designs/admin.css';
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>

//         <form>
//           <div className="input-group">
//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Enter your email" />
//           </div>

//           <div className="input-group">
//             <label htmlFor="password">Password</label>
//             <input type="password" id="password" placeholder="Enter your password" />
//           </div>

//           <button type="submit" className="login-btn">Login</button>
//         </form>

//         <p className="footer-text">
//           Don’t have an account? <a href="#">Sign up</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import './assets/designs/admin.css';
import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      {/* Animated Background */}
      <div className="bg-animation"></div>

      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>

          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>

          <p className="footer-text">
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

