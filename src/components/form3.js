import React from "react";

const Form3 = () => {
  return (
    <div>
      <h5>Contract Details</h5>
      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Customer Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Enter Name: </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Enter Address: </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Telephone Number : </label>
          <input className="col-md-4" type="number" />
          <label className="col-md-2">Mobile Number: </label>
          <input className="col-md-4" type="number" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Email ID : </label>
          <input className="col-md-4" type="email" />
          <label className="col-md-2">Is Internation Customer: </label>
          <input className="col-md-4" type="text" />
        </div>
      </div>
      <div className="border border-black rounded p-2 m-2 mr-2">  
        <div>
            <h6>Contact Details</h6>
        </div>
        <div className=" ">
        </div>      
        <div className="row container-fluid p-1">
          <label className="col-md-2 " >Used Credit : </label>
          <input className="col-md-4 " type="text" />
          <label className="col-md-2 ">Contact Status: </label>
          <input className="col-md-4 " type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">FM Type : </label>
          <input className="col-md-4" type="text" />
          <label className="col-md-2">FM Capacity: </label>
          <input className="col-md-4" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Machine/Permit No: </label>
          <input className="col-md-4" type="number" />
          <label className="col-md-2">FM License Upto: </label>
          <input className="col-md-4" type="text" />
        </div>
      </div>
    </div>
  );
};

export default Form3;
