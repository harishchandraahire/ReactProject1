import React, { useRef, useState } from 'react'

const Regform = () => {

    // const [inp,setInp]=useState('')
    const inprref=useRef(null)
    const passref=useRef(null)
    const [erros,setErros]=useState({
      email:"",
      password:""
    })

    const handleClick=(e)=>
    {
      e.preventDefault()
        console.log(inprref.current.value);
        console.log(passref.current.value);
        if(passref.current.value.length<6)
        {
          setErros({...erros,password:"Enter mIninum 6 Digit"})
        }
    }
  return (
    <div>
      <label htmlFor='email'>Enter Email : </label>
      <input type='text' ref={inprref} id='email'/>
      <label htmlFor='pass'>Enter Password : </label>
      <input type='text' ref={passref} id='pass'/>
      <button onClick={handleClick}>Click </button>
    </div>
  )
}

export default Regform
