import React, {useState} from 'react'


const Calculator = () => {

  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operation, setOperation] = useState('')
  const [answer, setAnswer] = useState('')
    

  const upDateNumber = (event) => {
      setOperand1(event.target.value)
  }

    return (
        <div>
            
   
          <div>
              <div className="maths">
                  <h2>React Calculator</h2> 
                   <input type="text" id="operand1" value={operand1} onChange= {event => setOperand1(event.target.value)}/>
                   <span> </span>
                   <select id="operator">
                       <option value="add">+</option>
                       <option value="subtract">-</option>
                       <option value="multiply">*</option>
                       <option value="divide">/</option>
                   </select>
                   <span> </span>
                   <input type="text" id="num2" />
                   <span> </span>
                   <input type="button" value="=" onClick="calculate()" />
                   <span> </span>
                   <input type="text" id="answer" />
                 
                 
                               
                  function calculate() {

                  <div>
                        <var num1 = "getElementById(num1).value" />
                             
                      <var num2 = "getElementById(num2).value" />
                                   
                      <var num3 = "parseInt(num1) + parseInt(num2)"/> 
                  </div>
                   
                  } 
                 
                </div>
                 
            </div>
            

        </div>        
        

    )
    
}


export default Calculator;