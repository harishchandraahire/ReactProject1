import React from 'react';
import Student from './student';
import User from './user';

function PassfucAsProps() {
 
  function getData() {
    alert("Hello from 'PassFuncAsProps' component (Parent Component)")
  }
  return (
    <div>
     <User  data={getData} />
     <Student data={getData} />
    </div>
  );
}

export default PassfucAsProps;