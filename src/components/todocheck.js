import { useState } from 'react';
import '../style/todocheck.css'

function TodoCheck() {
  let task='';
  const [tasks,setTasks]=useState([])
  const [error,setError]=useState(false)
  const taskStyle={color:'red',display:'flex', justifyContent:'space-between'}

  const addToList=()=>{
    if (task.trim() === '')
    {
      setError(true);
    }
    else{
      console.log(task);
      setTasks([task,...tasks]);
      console.log(tasks);
    }
  }

  const makeValue= (val)=>
  {
    task=val;
  }

  const remove = (index) =>
  {
    tasks.splice(index,1);
    setTasks([...tasks])
  }

  return (
    <div className='App1'>
      <div className='todo-header m-3'>
        <input type='text' id='sbox' placeholder='Enter Text' onChange={(e)=>makeValue(e.target.value)} />
        <button onClick={addToList}>Search</button>
      </div>  

      <div className='todoList'>
        {error && <p>Please do not Enter Empty Task </p>}
        {tasks.map ((val,index)=>(
        <div className='task' key={index} style={taskStyle}>
          <p>    {val}  </p>
          <button onClick={()=>remove(index)}>Delete</button>
        </div>
      ))}
      </div>
    </div>
  )
}

export default TodoCheck;
