import { useState } from "react";

const NewLogin = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
        setauthenticated(true)
        localStorage.setItem("authenticated", true);
    }
  };
  return (
    <div>
      <p>Welcome Back</p>
      <form onSubmit={handleSubmit}>
        <ul>
            <dt>Ente Username : </dt>
            <dd><input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            /></dd>

            <dt>Ente Password : </dt>
            <dd><input
            type="password"
            name="Password"
            onChange={(e) => setpassword(e.target.value)}
            /></dd>

            <dd></dd>
            <dd><input type="submit" value="Submit" /></dd>
        </ul>
        
      </form>
    </div>
  )
};
// }

export default NewLogin;
