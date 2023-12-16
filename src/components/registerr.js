import React, { useState } from 'react';
import Navbar from './navbar';
import '../style/login.css'
import Login from './login';

const Registerr = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mono, setMono] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setloggedIn]=useState(false)

  const handleRegister = () => {

    if (name === '' || email === '' || mono === '' || username === '' || password === '')
    {
        alert('All Field are Required..!');
    }
    else
    {
       setloggedIn(true);
       alert('User Register Successfully...!')
    }
    // if (username === 'harish' && password === '123') 
    // {
    //   setloggedIn(true);
    //   alert('Login successful!');
    //   console.log('Login successful!')
    // } 
    // else if (username === '' && password === '') 
    // {
    //    alert('Please enter username and password');
    //   console.log('invalid login')
    // } else {
    //   alert('invalid username and password')
    // }
  };

  const handlelog=()=>{
    setloggedIn(true);
    // alert('Open LogIn Page')
    console.log('Open LogIn Page')
  };

  return (
    <div>
        { !loggedIn?(
          <div  className='border border-danger rounded p-4 text-center'
          style={{
            marginTop: "50px",
            marginLeft: "470px",
            marginRight: "520px",
            boxShadow: "5px 5px 10px black",
          }} >
          <h2>Register Page</h2>
            <table align='center'>
              <tbody>
              <tr>
                <th><label htmlFor="name">Name : </label></th>
                <td className='p-2'><input
                    type="text"
                    id="name"
                    placeholder='Enter Name'
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  /></td>
              </tr>
              <tr>
                <th><label htmlFor="email">Email : </label></th>
                <td className='p-2'><input
                        type='email'
                        id="email"
                        placeholder='Enter E-mail'
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                  /></td>
              </tr>
              <tr>
                <th><label htmlFor="mono">Mobile No : </label></th>
                <td className='p-2'><input
                    type="number"
                    id="mono"
                    placeholder='Mobile No'
                    name="mono"
                    value={mono}
                    onChange={(e) => setMono(e.target.value)}
                    required
                  /></td>
              </tr>
              <tr>
                <th><label htmlFor="username">Username : </label></th>
                <td className='p-2'><input
                    type="text"
                    id="username"
                    placeholder='username/email'
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  /></td>
              </tr>
              <tr>
                <th><label htmlFor="password">Password : </label></th>
                <td className='p-2'><input
                    type="password"
                    id="password"
                    placeholder='********'
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  /></td>
              </tr>
              <tr>
                <td className='p-3'><button type="submit"  className='btn btn-outline-primary' onClick={handleRegister}>Register</button></td>
                <td className='p-3'><button type="submit"  className='btn btn-outline-primary'>Cancel</button></td>
              </tr>
              </tbody>
            </table> 
            <div>
                <hr/>
                <p>If You Have Already Login CLick Here</p>
                <button className='btn btn-outline-success w-75' onClick={handlelog} >Login</button>
            </div>
        </div>
    
        ):(
        <Login/>
        )}
    </div>
  );
};

export default Registerr;
