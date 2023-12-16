import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/login';
import MainContent from './components/amazonloginmodel';
import MainContent1 from './components/amazonloginwithclasscomp';
import Product from './components/product';
import Reusecompwithdiffargu from './components/reusecompwithdiff';
import RegisterProductComponent from './components/registerproduct';
import Tableform from './components/tableform';
import NewLogin from './components/NewLogin';
import Register from './components/register';
import Form1 from './components/form1';
import Form2 from './components/Form2';
import Form3 from './components/form3';
import Navbar from './components/navbar';
import Topnav from './components/topnav';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
    {/* <hr color='red'/> 
    <MainContent/> */}
     {/*<hr color='red'/>
    <Product/>
    <hr color='red'/>
    <MainContent1/>
    <hr color='red'/>
    <Reusecompwithdiffargu/>
    <hr color='red'/>
    <RegisterProductComponent/>
    <hr color='red'/>
    <Tableform/> */}
    {/* <hr color='red'/> */}
    {/* <Login/> */}
    {/* <hr color='red'/> */}
    {/* <NewLogin/>
    <hr color='red'/> */}
    {/* <Register/> */}
    {/* <Form1/> */}
    {/* <Form2/> */}    
    {/* <Form3/> */}
    {/* <Navbar/> */}
    {/* <Topnav/> */}
  </React.StrictMode>
);

