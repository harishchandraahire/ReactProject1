import React from 'react'

const Form4 = () => {
  return (
   <div>
     <div >
      <h5>Money Order Details</h5>
      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Foreign MO Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">MO Number: </label>
          <input className="col-md-3" type="number" />
          <input className="col-md-1" type="checkbox" />
          <label className="col-sm-2">Return to Remitter </label>
          <input className="col-md-1" type="checkbox" />
          <label className="col-md-2">Full Refund </label>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Remark: </label>
          <select className="col-md-7 mr-2"><option></option></select>
          <button className="col-md-2">Fetch</button>
        </div>
      </div>

      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Foreign MO Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">origin: </label>
          <input className="col-md-10" type="number" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Select Currancy: </label>
          <select className="col-md-4"><option>CAD</option></select>
          <label className="col-md-2">Booking Date: </label>
          <input className="col-md-4" type="date" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Amount (CAD) : </label>
          <input className="col-md-4" type="number" />
          <label className="col-md-2">Amount (TTD): </label>
          <input className="col-md-4" type="text" />
        </div>
      </div>

      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Remitter Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Name : </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Address : </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Mobile No: </label>
          <input className="col-md-6" type="number" />
          <input className="col-md-1" type="checkbox" />
          <label className="col-md-3">Full Refund </label>
        </div>
      </div>

      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Payee Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Name : </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Address : </label>
          <input className="col-md-10" type="text" />
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-2">Mobile No: </label>
          <input className="col-md-6" type="number" />
          <input className="col-md-1" type="checkbox" />
          <label className="col-md-3">Retain Payee Details </label>
        </div>
      </div>

      <div className="border border-black rounded p-2 m-2 mr-2">
        <div>
            <h6>Identity Details</h6>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-3">Payee's Identification : </label>
          <select className="col-md-8" >
            <option>Nation Identification Card</option>
          </select>
        </div>
        <div className="row container-fluid p-1">
          <label className="col-md-3">Identity Number : </label>
          <input className="col-md-6 mr-5" type="number" />
          <button className='col-md-2' >Print Form</button>
        </div>
      </div>
    </div>

    <div>

    </div>
   </div>
  )
}

export default Form4;
