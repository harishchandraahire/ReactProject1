import React from 'react'
import{Table} from 'react-bootstrap'

const Tableform = () => {
  return (
    <div className=''>
        <form className='m-5 text-center'>
            <Table className='table table-hover text-center align-items-center'>
                <tbody>
                    <tr>
                        <th className='w-50'>Enter Name</th>
                        <td><input className='w-50' placeholder='Enter name' type="text" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th className='w-50'>Enter Email</th>
                        <td><input className='w-50' placeholder='Enter Email' type="email" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th className='w-50'>Select Date</th>
                        <td><input className='w-50' placeholder='Select Date' type="date" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th className='w-50'>Select File</th>
                        <td><input className='w-50' placeholder='select File' type="file" name="" id="" /></td>
                    </tr>
                    <tr>
                        <th className='w-50'>Enter Password</th>
                        <td><input className='w-50' placeholder='Enter Password' type="password" name="" id="" /></td>
                    </tr>
                    <tr>
                        <td><button  className='btn btn-outline-primary w-100'>Submit</button></td>
                        <td><button className='btn btn-outline-danger w-100'>Cancel</button></td>
                    </tr> 
                </tbody>               
            </Table>       
        </form>
    </div>        
  )
}

export default Tableform;
