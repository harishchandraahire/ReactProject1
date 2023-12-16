import React, { useState } from "react";
import Navbar from "./navbar";
import "../style/login.css";
import Registerr from "./registerr";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setloggedIn] = useState(false);
  const [registerIn, setRegisterIn] = useState(false);

  const handleLogin = () => {
    if (username === "harish" && password === "123") {
      setloggedIn(true);
      // setRegisterIn(false);
      alert("Login successful!");
      console.log("Login successful!");
    } else if (username === "" && password === "") {
      alert("Please enter username and password");
      console.log("invalid login");
    } else {
      alert("invalid username and password");
    }
  };

  const handlereg = () => {
    setRegisterIn(true);
    // setloggedIn(false)
    // alert("Open Register Page ");
    console.log(`Open Register Page ${registerIn} `);
  };

  return (
    <div>
      {!loggedIn && !registerIn ? (
        <div
          className="border border-danger rounded p-4 text-center"
          style={{
            marginTop: "70px",
            marginLeft: "470px",
            marginRight: "520px",
            boxShadow: "5px 5px 10px black"
          }}
        >
          <h2>Login Page</h2>
          <table align="center">
            <tbody>
              <tr>
                <th>
                  <label htmlFor="username">Username : </label>
                </th>
                <td className="p-2">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="password">Password : </label>
                </th>
                <td className="p-2">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>
              {/* <tr>
                <td className='p-3'><button type="button"  className='btn btn-outline-primary w-100' onClick={handleLogin}>Login</button></td>
                <td className='p-3'><button type="button"  className='btn btn-outline-primary w-100'>Cancel</button></td>
              </tr> */}
            </tbody>
          </table>
          <div>
            <button
              type="button"
              className="btn btn-outline-primary w-75"
              onClick={handleLogin}
            >
              Login
            </button>
            <button type="submit" className="btn btn-outline-warning w-75 mt-2">
              Cancel
            </button>
            <hr style={{ color: "red" }} />
            <p>If You Don't Have Login CLick Here</p>
            <button
              className="btn btn-outline-success w-75"
              onClick={handlereg}
            >
              Register
            </button>
          </div>
        </div>
      )
         :!loggedIn &&  registerIn?(<Registerr/>) 
         : (<Navbar />
      )}
    </div>
  );
};

export default Login;
