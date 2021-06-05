import React, {useState} from 'react'


const Calculator = () => {

  const [number, setNumber] = useState('')

  const upDateNumber = (event) => {
      setNumber(event.target.value)
  }

    return (
        <div className="maths">

           <h2>React Calculator</h2> 
           <input type="text" number="search" onChange={(event) => setNumber(event.target.value)} value={number}/>
        </div>
    )
    
}


export default Calculator;