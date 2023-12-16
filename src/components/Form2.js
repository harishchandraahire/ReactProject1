import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import {Container, Row, Col, Image} from 'react-bootstrap'

const From2 = ()=>{
    const borderStyle = {
        border: "1px solid black", // Adjust border properties as needed
        backgroundColor: "White", // Adjust background color as needed
        margin: "3px",
        height: "auto",
        boxSizing: "border-box",
        borderRadius: "10px",
        padding:"10px"
        
    };
    const dataForGrid = [
        { Prefix: 'ABC' },
        { Prefix: 'DEF' },
        // Add more data as needed
      ];
    return (
        <div className="container-fluid">
          <div className="row p-1" style={{ ...borderStyle }}>
            <div class="col-md-12">
              <h1>AllocateBox</h1>
            </div>
    
            <div className="col-sm-8"  >
              <div class="row " style={{ ...borderStyle }}>
                <form class="row g-3">
                  <div class="col-md-12">
                    <h3>Box Details</h3>
                  </div>
                  <div class="col-md-4">
                    <label for="input" class="form-label">
                      BoxType
                    </label>
                    <select
                      id="inputState"
                      style={{ height: "33px" }}
                      class="form-select"
                    >
                      <option selected>Choose...</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div class="col-md-6">
                    <label for="input" class="form-label">
                      Location
                    </label>
                    <input type="input" class="form-control" id="inputPassword4" />
                  </div>
                  <div class="col-md-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      Show all locations
                    </label>
                  </div>
                  <div class="col-5">
                    <label for="inputAddress" class="form-label">
                      Box customer Type
                    </label>
                    <select
                      id="inputState"
                      style={{ height: "33px" }}
                      class="form-select"
                    >
                      <option selected>Choose...</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>{" "}
                  </div>
                  <div class="col-5">
                    <label for="inputAddress" class="form-label">
                      Rental Period Upto
                    </label>
                    <select
                      id="inputState"
                      style={{ height: "33px" }}
                      class="form-select"
                    >
                      <option selected>Choose...</option>
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>{" "}
                  </div>
                  <div class="col-2" style={{ marginTop: "37px" }}>
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      EPTC Employee?
                    </label>
                  </div>
                </form>
              </div>
              <div className="row" style={{...borderStyle}} >
              <form class="row g-3">
                  <div class="col-md-12">
                    <h3>Rental Details</h3>
                  </div>
                  <div class="col-md-4">
                    <label for="input" class="form-label">
                      Click to select additional services available
                    </label>
                  </div>
                  <div class="col-md-1" style={{ marginTop: "5px" }}>
                    <button type="submit" class="btn btn-primary">
                      ....
                    </button>
                  </div>
                  <div class="col-md-1">
                    <label for="input" class="form-label">
                      Total
                    </label>
                  </div>
                  <div class="col-md-5" style={{ marginTop: "1px" }}>
                    <input type="input" class="form-control" id="inputPassword4" />
                  </div>
                  <div class="col-md-1" style={{ marginTop: "5px" }}>
                    <button type="submit" class="btn btn-primary">
                      ....
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-sm-4"  >
              <div class="row " style={{ ...borderStyle }}>
                <div class="row">
                <label for="input" class="form-label">if you dont know the locality,press F2 to get the all localities</label>
                </div>
                <div class="row " style={{...borderStyle}}>
                    <div class="co1-md-12">
                      <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                      <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                    </div>
                     <div class="col-md-5 ">
                     <input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required/>
                      <label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
                     </div>
                     <div class="col-md-4 ">
                     <input type="input" class="form-control" id="inputPassword4" />
                    </div>
                    <div class="col-md-3">
                    <button class="btn btn-primary" type="submit" disabled>Fetch</button>
                    </div>
                    <div className="col-12">
                    <Container style={{height:"176px"}}>
                    <Row>
                        <Col xs={12}>
                        <table className="table">
                            <thead>
                            <tr>
                                {/* {/ Adjust the table header columns /} */}
                                <th style={{ visibility: 'collapse' }}></th>
                                <th style={{ width: '100%' }}>Vacant Boxes</th>
                            </tr>
                            </thead>
                            <tbody>
                            {dataForGrid.map((item, index) => (
                                <tr key={index}>
                                {/* {/ Adjust cells with image, text, and bindings /} */}
                                <td style={{ visibility: 'collapse' }}>
                                    <Image src="/Images/Tick16.png" width="16" height="16" />
                                </td>
                                <td>
                                    <Row>
                                    <Col xs={1}>
                                        <Image src="/Images/postbox.png" height="16" width="16" />
                                    </Col>
                                    <Col xs={11}>
                                        {/* {/ You can replace this with your binding /} */}
                                        <span>{item.Prefix}</span>
                                    </Col>
                                    </Row>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </Col>
                    </Row>
                    </Container>
                    </div>
                  </div>
               </div>
              
            </div>
            <div className="col-12" >
                <div className="row" style={{...borderStyle}}>
                    <div className="row">
                        <h2 className="fw-bold fst-italic mb-4">Customer Details</h2>
                    </div>
                    <div className="row">
                        <div className="col-5">
                            <label for="input" class="form-label">Name</label>
                            <input type="input" class="form-control" id="inputPassword4" />                </div>
                        <div className="col-5">
                            <label for="input" class="form-label">Customer Segment</label>
                            <input type="input" class="form-control" id="inputPassword4" />                 </div>
                        <div className="col-2" style={{marginTop:'22px'}}>
                            <button class="btn btn-primary" type="submit" disabled>Creat/Get Customerprofile</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label for="input" class="form-label">Represented by</label>
                            <input type="input" class="form-control" id="inputPassword4" />                     
                       </div>
                        <div className="col-4">
                            <label for="input" class="form-label">Address Details</label>
                            <input type="input" class="form-control" id="inputPassword4" />
                         </div>
                        <div className="col-4"  >
                           <label for="input" class="form-label">Email Address</label>
                           <input type="input" class="form-control" id="inputPassword4" />                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label for="input" class="form-label">Mobile Number</label>
                            <input type="input" class="form-control" id="inputPassword4" />                     
                       </div>
                        <div className="col-3">
                            <label for="input" class="form-label">TelePhone Number</label>
                            <input type="input" class="form-control" id="inputPassword4" />
                         </div>
                        <div className="col-3"  >
                           <label for="input" class="form-label">Identity</label>
                           <input type="input" class="form-control" id="inputPassword4" />                       
                        </div>
                        <div className="col-3"  >
                           <label for="input" class="form-label">Identity Number</label>
                           <input type="input" class="form-control" id="inputPassword4" />                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <label for="input" class="form-label">Remarks</label>
                            <input type="input" class="form-control" id="inputPassword4" />                     
                       </div>
                       
                    </div>
               
                </div>
               
            </div>
          </div>
        </div>
      );
}
export default From2;