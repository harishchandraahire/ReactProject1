import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap'

 const Form1 = () => {
  
      const data = [
        {Description : 'EMO Commission' , Tariff  : '12.55' , VAT : '0'}
      ]
  return (
    <div className='container-fluid'>
      <Form>
      <div className='row'>
        <div className='col-sm-8'>
           <div className="star mt-2" style={{border : '1px solid black' , padding: '10px'}}>
           <h6 style={{fontStyle: 'italic' ,  marginTop : '2px'}}><b>Money Order</b></h6>
                <label style={{marginBottom : '5px',marginLeft: '15px' ,textAlign: 'left' }}>MO Value</label>
                <input type="text" id="txtmovalue" style={{marginLeft: '50px'}}/>
                 <label style={{color: 'red' , marginLeft : '5px'}}><b>*</b></label>
                  {/* <img src="images/Sanction.JPG">  */}
                 <br/>
                 <label style={{textAlign: 'left',marginLeft: '15px'}}>Destination</label>
                 <input type="text" id="txtDestination" style={{width : '550px' , marginLeft: '39px'}} placeholder="Anywhere Payment..." />
                 <label style={{color: 'red', marginLeft: '5px'}}><b>*</b></label>
         </div>
         <div className="star mt-2" style={{border : '1px solid black' , padding: '10px'}}>
           <h6 style={{fontStyle: 'italic'}}><b>Remitter</b></h6>
           <label style={{marginLeft: '15px'}}>Name</label>
           <input type='text' id='txtRemitterName' style={{marginLeft: '79px', width: '550px'}}/><br/>
           <label style={{marginLeft: '15px'}}>Address</label>
           <input type='text' id='txtRemitterAddress' style={{marginLeft: '65px', width: '550px',marginTop: '5px', marginBottom: '4px'}} /><br/>
           <label style={{marginLeft: '15px'}}>Email & Mobile</label>
           <input id='txtRemitterEmail' style={{width: '230px', marginLeft: '13px'}}/>
           <input id='txtRemitter' style={{width: '130px',marginLeft: '5px'}}/>
           <input id='txtRemitterMobile' style={{width: '180px',marginLeft: '5px', marginBottom:'4px'}}/>
           <label style={{marginLeft: '15px'}}>Date of Birth</label>
           <input type='date' id='date' style={{marginLeft: '32px',width: '230px'}}/>
           <label style={{marginLeft: '20px'}}>Occupation</label>
           <input id='txtRemitterOccupation' style={{width: '180px',marginLeft: '39px', marginBottom:'4px'}}/><br/>
           <label style={{marginLeft: '15px'}}>Source of Fund</label>
           <select style={{ width: '230px', height: '28px', marginLeft: '14px' }} id="identity"name="country">
             <option value="value1">Loan from bank</option>
             <option value="value2">Personal savings</option>
             <option value="value3">Refund Tax</option>
          </select>
           <label style={{marginLeft: '21px'}}>Purpose</label>
           <input id='txtRemitterOccupation' style={{width: '180px',marginLeft: '62px', marginBottom:'4px'}}/><br/>
           <label style={{marginLeft: '15px'}}>Identification</label>
           <select style={{ width: '230px', height: '28px', marginLeft: '29px' }} id="identity"name="country">
             <option value="value1">Loan from bank</option>
             <option value="value2">Personal savings</option>
             <option value="value3">Refund Tax</option>
          </select>
           <label style={{marginLeft: '21px'}}>ID NO.</label>
           <input id='txtRemitterOccupation' style={{width: '180px',marginLeft: '71px', marginBottom:'4px'}}/><br/>
         </div>
         <div className="star mt-2" style={{border : '1px solid black' , padding: '10px'}}>
         <h6 style={{fontStyle: 'italic' ,  marginTop : '2px'}}><b>Payee</b></h6>
         <label style={{marginLeft: '15px'}}>Name</label>
           <input type='text' id='txtPayeeName' style={{marginLeft: '79px', width: '550px'}}/><br/>
           <label style={{marginLeft: '15px'}}>Address</label>
           <input type='text' id='txtPayeeAddress' style={{marginLeft: '65px', width: '550px',marginTop: '5px', marginBottom: '4px'}} /><br/>
           <label style={{marginLeft: '15px'}}>Email & Mobile</label>
           <input id='txtPayeeEmail' style={{width: '230px', marginLeft: '13px'}}/>
           <input id='txtPayee' style={{width: '130px',marginLeft: '5px'}}/>
           <input id='txtPayeeMobile' style={{width: '180px',marginLeft: '5px', marginBottom:'4px'}}/>
         </div>
         <div className="star mt-2" style={{border : '1px solid black' , padding: '10px'}}>
         <h6 style={{fontStyle: 'italic'}}><b>Security</b></h6>
         <div className="d-flex justify-content-start">
          <div style={{ marginLeft: '135px' }}>
                <Form.Check type="checkbox" id="chkbox1" label="Payee answers question"/>
                </div>
                <div>
                  <Form.Check style={{marginLeft: '35px'}} type="checkbox" id="chkbox2" label="Payee Provides ID"/>
                </div>
          </div>
          <label style={{marginLeft: '15px'}}>Question</label>
          <input type='text' id='txtRemitterName' style={{marginLeft: '59px', width: '550px' , marginBottom: '4px'}}/><br/>
          <label style={{marginLeft: '15px'}}>Answer</label>
          <input type='text' id='txtRemitterName' style={{marginLeft: '70px', width: '550px'}}/><br/>
         </div>
        </div>
        <div className='col-sm-4'>
          <div className="star mt-2" style={{border : '1px solid black' , padding: '10px'}}>
            <h6 style={{fontStyle: 'italic', textAlign: 'center'}}><b>Electronic Money Order</b></h6>
            <h6 style={{fontStyle: 'italic', fontSize: '15px', marginTop : '30px'}}>Transaction details</h6>
            <table style={{borderCollapse:'collapse', width: '300px', marginLeft: '15px'}}>
              <thead>
                 <tr style={{backgroundColor: 'white',fontSize : '13px'}}>
                   <th style={{ border: '1px solid #333', padding: '4px'}}>Description</th>
                   <th style={{ border: '1px solid #333', padding: '4px'}}>Tariff(VIP)</th>
                   <th style={{ border: '1px solid #333', padding: '4px'}}>VAT</th>
                 </tr>
              </thead>
              <tbody>
                {data.map((item , index) => (
                   <tr key={index} style={{ backgroundColor: index % 2 === 0 ? 'white' : '#f2f2f2' }}>
                   <td className='border border-black p-1'>{item.Description}</td>
                   <td className='border border-black p-1'>{item.Tariff}</td>
                   <td className='border border-black p-1'>{item.VAT}</td>
                   </tr>
                )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </Form>
    </div>
  )
}
export default Form1;
