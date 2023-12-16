import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/login';
import Registerr from './components/registerr';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [isRegistered,setIsRegistered] = useState(false)


  // const Login =()=>
  //   <div className="modal fade" id="login">
  //     <div className="modal-dialog">
  //       <div className="modal-content">
  //         <div className="modal-header">
  //           <h3>User Login</h3>
  //         </div>
  //         <div className="modal-body">
  //           <dl>
  //             <dt>User Name</dt>
  //             <dd><input type="text" id='username'  className="form-control" /></dd>
  //             <dt>Password</dt>
  //             <dd><input type="password" id='password' className="form-control" /></dd>
  //           </dl>
  //         </div>
  //         <div className="modal-footer">
  //             <button className="btn btn-primary" type='submit'>Login</button>
  //             <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>


const uselogin= () =>{ 
  setIsLoggedIn(true)
  console.log('logged in')
}

const register = () => {
  setIsRegistered(true)
  console.log('Register in')
}

  return (
    <div>
      {
        isLoggedIn===false && isRegistered===false?
        (            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >Learn React</a>
                <div className='m-3'>
                  <button className='btn btn-outline-primary m-3' onClick={() => uselogin()} >Login</button> 
                  <button className='btn btn-outline-primary m-3' onClick={() => register()}>Register</button>
                  {/* //href='#login' data-toggle="modal" */}
                </div>
              </header>    
            </div>        )
        : isLoggedIn===true ? (<Login />)
        :(<Registerr/>)
      }    
     </div>   
  );
}

export default App;
