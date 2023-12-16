import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

const Register = () => {
  const [name,setName]=useState("")
  const [lagn,setLang]=useState("")
  const [tnc,setTnc]=useState(false)

  function getFormData(e){
    console.log(name,lagn,tnc)
    e.preventDefault()
  }

  return (
    <div className='text-center'>
      <h3>This is register Form</h3>
      <Form onSubmit={getFormData}>        
        <input type='text' placeholder='enter Name' value={name} onChange={(e)=>setName(e.target.value)}/> <br/><br/>
        <select onChange={(e)=>setLang(e.target.value)}>
            <option>Select Option</option>I
            <option>Marathi</option>I
            <option>Hindi</option>I
            <option>English</option>I
            <option>Telgu</option>I
        </select><br/><br/>
        <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/> Term and Condition <br/><br/>
        <button type='submit'>Submit</button> <br/>
        <button >clear</button>

      </Form>
      <br/><br/>
      <div className='border border-black rounded-5'>
        <p>name : {name}</p>
        <p>Language : {lagn}</p>
        <p>Term & Condition : {tnc}</p>
      </div>
    </div>
  )
}

export default Register