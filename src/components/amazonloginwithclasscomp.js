import React from 'react'

const Nav = () =>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <button className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#NavMenu">
         <span className="navbar-toggler-icon"></span>
      </button>
      <a href="#" className="navbar-brand">
        Amazon Shopping
      </a>
      <div className="collapse navbar-collapse" id="NavMenu">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <a className="nav-link" href="#">Home</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Electronics</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="#">Footwear</a>
               </li>
               
               <li className="nav-item">
                 <a className="nav-link" data-toggle="modal" href="#login">Login</a>
               </li>
               <li className="nav-item">
                  <SearchBox />
               </li>
               <li> <p className='bg-info ml-3 p-1 rounded'>By Using Class Component</p></li>
             </ul>
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

const Login = () =>
<div className="modal fade" id="login">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
         <h3>User Login</h3>
      </div>
      <div className="modal-body">
         <dl>
           <dt>User Name</dt>
           <dd><input type="text" className="form-control" /></dd>
           <dt>Password</dt>
           <dd><input type="password" className="form-control" /></dd>
         </dl>
      </div>
      <div className="modal-footer">
          <button className="btn btn-primary">Login</button>
          <button data-dismiss="modal" className="btn btn-danger">Cancel</button>
      </div>
    </div>
  </div>
</div>

class MainContent1 extends React.Component
{
  render(){
    return (
      <>
       <Nav />
       <Login />
      </>
    )
  }
}

// ReactDOM.render(
//   <MainContent />,
//   document.getElementById('root')
// );

export default MainContent1