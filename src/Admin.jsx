// import './assets/designs/admin.css';
// import React, { useState } from 'react';

// const Admin = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const response = await fetch(`${import.meta.env.VITE_ROOT_URL}/api/Auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           fullName: "Admin",
//           username,
//           password,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed!");
//       }

//       const data = await response.json();

//       // Tokenni localStorage ga saqlaymiz
//       localStorage.setItem("token", data.token);
//       // window.location.href = "/admin_panel";

//       // Admin panelga redirect qilamiz
//       window.location.href = "/admin";
//     } catch (err) {
//       setError("Username yoki parol noto‘g‘ri!");
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="bg-animation"></div>

//       <div className="login-container">
//         <div className="login-box">
//           <h2>Login</h2>

//           <form onSubmit={handleSubmit}>
//             <div className="input-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Enter your username"
//                 required
//               />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter your password"
//                 required
//               />
//             </div>

//             {error && <p className="error">{error}</p>}

//             <button type="submit" className="login-btn">Login</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;



import './assets/designs/admin.css';
import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 Agar foydalanuvchi login bo‘lgan bo‘lsa — to‘g‘ridan-to‘g‘ri admin panelga yo‘naltiramiz
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      window.location.href = "/admin_panel";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_ROOT_URL}/api/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Admin",
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed!");
      }

      const data = await response.json();

      // 🔑 Tokenni localStorage ga saqlaymiz
      localStorage.setItem("token", data.token);

      // 🚀 Admin panelga yo‘naltiramiz
      window.location.href = "/admin_panel";

    } catch (err) {
      setError("Username yoki parol noto‘g‘ri!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="bg-animation"></div>

      <div className="login-container">
        <div className="login-box">
          <h2>Admin Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="error">{error}</p>}

            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;



// import './assets/designs/admin.css';
// import React from 'react';

// const Login = () => {
//   return (
//     <div className="login-page">
//       {/* Animated Background */}
//       <div className="bg-animation"></div>

//       <div className="login-container">
//         <div className="login-box">
//           <h2>Login</h2>

//           <form>
//             <div className="input-group">
//               <label htmlFor="email">Name</label>
//               <input type="text" id="email" placeholder="Enter your Name" />
//             </div>

//             <div className="input-group">
//               <label htmlFor="password">Password</label>
//               <input type="password" id="password" placeholder="Enter your password" />
//             </div>

//             <button type="submit" className="login-btn">Login</button>
//           </form>

//           <p className="footer-text">
//             Don’t have an account? <a href="#">Sign up</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

