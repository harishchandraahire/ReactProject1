import React from 'react'

const Topnav = () => {
  return (
    <div>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark navabr-icon-top d-flex">
            <div className="container-fluid">
                <a href="#" className="navbar-brand ms-3">Click.</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navid">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navid">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item me-auto">
                            <a href="#" className="nav-link">
                                {/* <i className="bi bi-house-fill position-relative">
                                    <span
                                        className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                                        style="font-size: 8px;">7</span>
                                </i>&nbsp;  */}
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                {/* <i className="bi bi-envelope position-relative">
                                    <span
                                        className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                                        style="font-size: 8px;">8</span>
                                </i>&nbsp; */}
                                 MessageBox</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="" className="nav-link dropdown-toggle"  data-bs-toggle="dropdown">
                                {/* <i
                                    className="bi bi-envelope position-relative">
                                    <span
                                        className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                                        style="font-size: 8px;">9</span>
                                </i>&nbsp; */}
                                Dropdown
                            </a>
                            <ul className="dropdown-menu">                            
                                <li><a href="#" className="dropdown-item">Item 1 </a></li>
                                <li><a href="#" className="dropdown-item">Item 2 </a></li>
                                <li><a href="#" className="dropdown-item">Item 3 &raquo;</a>
                                    <ul className="dropdown-menu submenu">
                                        <li><a href="#" className="dropdown-item">SubItem 1</a></li>
                                        <li><a href="#" className="dropdown-item">SubItem 2</a></li>
                                        <li><a href="#" className="dropdown-item">SubItem 3</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                {/*<i className="bi bi-globe2 position-relative">
                                     <span
                                        className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle"
                                        style="font-size: 8px;">8</span>
                                </i>&nbsp; */}
                                Globe
                            </a>
                        </li>
                    </ul>               

                    
                    <form classNameName="d-flex me-3" >
                        <input classNameName='from-control  me-2' type='search' placeholder='Search'/>
                        <button classNameName="btn btn-outline-success me-3" type="submit">Search</button>
                    </form>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Topnav;
