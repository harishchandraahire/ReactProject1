import React, { useState } from "react";
import Dashboard from "./Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./login";
import Product from "./product";
import MainContent from "./amazonloginmodel";
import MainContent1 from "./amazonloginwithclasscomp";
import RegisterProductComponent from "./registerproduct";
import Reusecompwithdiffargu from "./reusecompwithdiff";
import Tableform from "./tableform";
import Register from "./register";
import "../style/login.css";
import Regform from "./regform";
import LoginBasic from "./loginbasic";
import PassfucAsProps from "./passfucasprop";
import Form1 from "./form1";
import Form2 from "./Form2";
import TodoCheck from "./todocheck";
import Form3 from "./form3";
import Form4 from "./form4";
import Form5 from "./form5";
import Topnav from "./topnav";
import ValidationComponent from './cmpyash'

const Navbar = () => {
  const [activemenu, setActivemenu] = useState(null);
  const [dashboardIs, setDashboardIs] = useState(true);

  const handleMenuClick = (menuId) => {
    setActivemenu(menuId);
    setDashboardIs(false);
  };

  const sideNavItems = [
    { id: 1, label: "Dashboard" },
    { id: 12, label: "Form1" },
    { id: 13, label: "Form2" },
    { id: 15, label: "Form3" },
    { id: 16, label: "Form4" },
    { id: 17, label: "Form5" },
    { id: 18, label: "Validation Component" },
    { id: 2, label: "Product" },
    { id: 3, label: "MainContent" },
    { id: 4, label: "MainContent1" },
    { id: 5, label: "Register" },
    { id: 6, label: "RegisterProduct" },
    { id: 7, label: "Reuse Comp" },
    { id: 8, label: "Table Form" },
    { id: 9, label: "Reg Form" },
    { id: 10, label: "login Basic" },
    { id: 11, label: "Pass Func As Prop" },
    { id: 14, label: "ToDo Check" },
  ];

  const menuItems = [
    { id: 1, component: <Dashboard /> },
    { id: 2, component: <Product /> },
    { id: 3, component: <MainContent /> },
    { id: 4, component: <MainContent1 /> },
    { id: 5, component: <Register /> },
    { id: 6, component: <RegisterProductComponent /> },
    { id: 7, component: <Reusecompwithdiffargu /> },
    { id: 8, component: <Tableform /> },
    { id: 9, component: <Regform /> },
    { id: 10, component: <LoginBasic /> },
    { id: 11, component: <PassfucAsProps /> },
    { id: 12, component: <Form1 /> },
    { id: 13, component: <Form2 /> },
    { id: 14, component: <TodoCheck /> },
    { id: 15, component: <Form3 /> },
    { id: 16, component: <Form4 /> },
    { id: 17, component: <Form5 /> },
    { id: 18, component: <ValidationComponent /> },
  ];

  return (
    <div>
      <div className="row container-fluid">
        <div className="row-cols-auto rounded-2">
          {/* <MainContent/> */}
          {/* <Topnav/> */}
        </div>
        <div className="col-2 ">
          <img
            src="logo192.png"
            style={{ height: "50px", width: "240px" }}
            alt="logo"
          />
        </div>
        <div className="col-10">
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="container-fluid p-1">
        <div className="row m-1 p-1">
          <div className="col-2  border border-black rounded">
            {sideNavItems.map((item) => (
              <p key={item.id}>
                <a
                  href="#"
                  onClick={() => handleMenuClick(item.id)}
                  className={activemenu === item.id ? "active" : ""}
                >
                  {item.label}
                </a>
              </p>
            ))}
          </div>
          <div className="col-10 border border-black rounded">
            {/* <h1 className='text-center border border-black rounded-4 mt-1'>Main container</h1> */}
            {
              !dashboardIs?
              (
                menuItems.map((menuItem) =>activemenu === menuItem.id ? (menuItem.component) : (<div key={menuItem.id}></div>))
              ):(<Dashboard/>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
