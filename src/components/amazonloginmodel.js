import React, { Component } from 'react';
import Tableform from './tableform';
import { CloseButton, DropdownButton } from 'react-bootstrap';
const Nav = () =>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#NavMenu">
         <span className="navbar-toggler-icon"></span>
      </button>
      <div>
      <a href="#" className="navbar-brand">Amazon Shopping</a>
      </div>
      <div className="d-flex justify-content-around collapse navbar-collapse" id="NavMenu">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link" href="#">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-toggle="modal" href="#electronics">Electronics</a>
               </li>
               <li className="nav-item">
                 {/* <a className="nav-link" href="#">Footwear</a> */}
                 <select className='nav-link text-white'>
                  <option className='text-black'>List advance</option>
                  <option className='text-black'>Create pan card</option>
                  <option className='text-black'>Create Aadhar Card</option>
                  <option className='text-black'>Create Voter Card</option>
                  <option className='text-black'>Create Driving License</option>
                 </select>
               </li>
               
               <li className="nav-item">
                 <a className="nav-link" data-toggle="modal" href="#login">Login</a>
               </li>
               {/* <li className="nav-item">
                  <SearchBox />
               </li> */}
               <li>
               <p className='bg-success p-1 ml-2 rounded'>By Using Function Component</p>
               </li>
             </ul>
      </div>
      <div>
        <SearchBox/>
      </div>
 </nav>

const SearchBox = () =>
<div className="input-group">
   <input type="text" className="form-control" />
   <div className="input-group-append">
    <button className="btn btn-warning">
     <span className="fa fa-search"></span>
    </button>
   </div>
</div>

const Electronics = () =>
<div className="modal fade" id="electronics">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
         <h3>Product Details</h3>
      </div>
      <div className="modal-body">
         <dl>
           <dt>Enter Product Name</dt>
           <dd><input type="text" className="form-control" /></dd>
           <dt>Enter Product Category</dt>
           <dd><input type="text" className="form-control" /></dd>
         </dl>
      </div>
      <div className="modal-footer">
          <button className="btn btn-primary">GetDetails</button>
          <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
      </div>
    </div>
  </div>
</div>
 
  const handleLogin=()=>
{
  const ids=document.getElementById('username');
  const pass=document.getElementById('password'); 

    if (ids !== '' && pass !== '') 
    {
      alert('Login successful!');
    } 
    else 
    {
        if(ids!=='')
        {
          alert(" UserName is Required");
        } 
        else if(pass!=='')
        {
          alert(" Password is Required");
        }
    }
}

const Login =()=>
    <div className="modal fade" id="login">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>User Login</h3>
          </div>
          <div className="modal-body">
            <dl>
              <dt>User Name</dt>
              <dd><input type="text" id='username'  className="form-control" /></dd>
              <dt>Password</dt>
              <dd><input type="password" id='password' className="form-control" /></dd>
            </dl>
          </div>
          <div className="modal-footer">
              <button className="btn btn-primary" type='submit' onClick={handleLogin}>Login</button>
              <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
</div>

const Register =()=>
    <div className="modal fade" id="register">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Register Form</h3>
          </div>
          <div className="modal-body">
            <dl>
              <dt>Enter First Name</dt>
              <dd><input type="text" id='firstname'  className="form-control" /></dd>
              <dt>Enter Second Name</dt>
              <dd><input type="text" id='secondname'  className="form-control" /></dd>
              <dt>Enter Last Name</dt>
              <dd><input type="text" id='lastname'  className="form-control" /></dd>
              <dt>Enter Email/ UserName</dt>
              <dd><input type="email" id='email'  className="form-control" /></dd>
              <dt>Enter Password</dt>
              <dd><input type="text" id='password' className="form-control" /></dd>
              <dt>Confirm Password</dt>
              <dd><input type="password" id='cnfpassword' className="form-control" /></dd>
            </dl>
          </div>
          <div className="modal-footer">
              <button className="btn btn-primary" type='submit'>Register</button>
              <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
          </div>
        </div>
      </div>
</div>

const Nav1=()=>
<nav className="sidenav col-2 bg-dark ">
      {/* <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#NavMenu">
         <span className="navbar-toggler-icon"></span>
      </button> */}
      <a href="#" className="navbar-brand">
        Filpkart Shopping
      </a>
      <div className="p-3 w-25" id="NavMenu">
             <ul className="navbar-nav border-info">              
             <li className="nav-item">
                  <a className='nav-link'data-toggle="modal" href="#register">Register</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" data-toggle="modal" href="#electronics">Electronics</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Footwear</a>
               </li>
             </ul>
      </div>
 </nav>



class MainContent extends React.Component
{
  render(){
    return (
      <>
       <Nav />
       <Login />
       <Electronics/>
       <Register/>
       {/* <Nav1/> */}
      </>
    )
  }
}

// ReactDOM.render(
//   <MainContent />,
//   document.getElementById('root')
// );
export default MainContent