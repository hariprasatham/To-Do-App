import React, { useState } from 'react'

function InputForm(props) {

  const [inputData, setInputData] = useState('')

  const handleChange = (event) => {
    setInputData(event.target.value)
  }
  return (
    <div className='form'>
      <input type="text" onChange={handleChange} value={inputData}/>
      <button onClick={()=>{
        props.addItems(inputData)
        setInputData("")
      }}>
        <span>Add</span>
        </button>
    </div>
  )
}

export default InputForm