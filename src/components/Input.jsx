import React from 'react'


function Input() {
  return (
    <>
        <div className="input">
            <input type="text" name='task' id='task' placeholder='Enter Your Task Here.....' />
            <button>ADD TASK</button>
        </div>
    </>
  )
}

export default Input