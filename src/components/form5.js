import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
export default function Form5() {
  const borderStyle = {
    border: "1px solid black", // Adjust border properties as needed
    backgroundColor: "White", // Adjust background color as needed
    margin: "3px",
    height: "auto",
    boxSizing: "border-box",
    borderRadius: "10px",
    padding:"10px"
    
};
  return (
    <div>
      <div className='row'>
         <p>Enter Customer Name IDs,Address and Contact details then click on ok button to create customer profile.CellPhone number will be the login Id</p>         
      </div>
      <div className='row' style={{...borderStyle}}>
         <div className='row'>
          <h2 className="fw-bold fst-italic mb-4">Customer Name &Identification</h2>
         </div>
         <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">Unique Id</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Place of birth</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2' >
            <div className='col-2'>
            <label for="input" class="form-label">CustomerType</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Date of birth</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">Nationality</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Customer Segment</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">CellPhone Number</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Type Identity</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">Customer/firms Name</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Identity</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">Cantct person Name</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Identity Vali Upto</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
      </div>
      <div className='row' style={{...borderStyle}}>
      <div className='row'>
          <h2 className="fw-bold fst-italic mb-4">Physical Address & Email Address</h2>
         </div>
          <div className='row mb-2' >
            <div className='col-2'>
            <label for="input" class="form-label">Address</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">StreetName</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">City</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">LandMark</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-2'>
            <label for="input" class="form-label">Zip code</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
            <div className='col-2'>
            <label for="input" class="form-label">Email Address</label>
            </div>
            <div className='col-4'>
            <input type="input" class="form-control" id="inputPassword4" />                     
            </div>
          </div>
      </div>
     </div>
  )
}

