import React, {useState} from 'react'

const Calculator = () => {

  const [operand1, setOperand1] = useState('')
  const [operation, setOperation] = useState('+')
  const [operand2, setOperand2] = useState('')
  const [answer, setAnswer] = useState('')
  const [error, setError] = useState('')
    

  const upDateNumber = (event) => {
      setOperand1(event.target.value)
  }

  const calculate = () =>{
      //if (!calculate()isValid){setAnswer('')
    //return setError('Please provide a valid number for both operands')}
      
     setAnswer('')
     setError('')

      switch (operation) {
      
     case '+':
          return setAnswer(parseInt(operand1)+parseInt(operand2))
     case '-':
          return setAnswer(parseInt(operand1)-parseInt(operand2))
     case '*':
          return setAnswer(parseInt(operand1)*parseInt(operand2))
     case '/':
          return setAnswer(parseInt(operand1)/parseInt(operand2))
          default:
            return setAnswer('Please provide a valid number for both operand')
        }

     }

    return (
            <div>
                  
            <div>
                <div className="maths">
                    <h2>React Calculator</h2> 
                    <input type="text" id="operand1" value={operand1} onChange= {(event) => setOperand1(event.target.value)}/>
                    <span> </span>
                    <select id="operation" value={operation} onChange= {(event) => setOperation(event.target.value)} >
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>
                    <span> </span>
                    <input type="text" id="operand2" value={operand2} onChange= {(event) => setOperand2(event.target.value)} />
                    
                    <span> </span>
                    <button type="button" value="=" onClick= {calculate}>=</button>   
                    <span> </span>
                    <input type="text" id="answer" value= {answer} />     
                    <div className='error'> {error}
                    </div>   
                               
                    </div>
                    
                </div>              

            </div>        
            

        )
        
}


export default Calculator;