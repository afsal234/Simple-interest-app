import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  //state to hold values from input field
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)
   //for conditional rendering
   const [isPrincipal, setIsPrinciple] = useState(true)
   const [isRate, setIsRate] = useState(true)
   const [isYear, setIsYear] = useState(true)

  const validate = (e)=>{
   let name = e.target.name
   let value = e.target.value
   console.log(!!value.match(/^[0-9]*$/));

   if(!!value.match(/^[0-9]*$/)){
      if(name== 'principle'){
         setPrinciple(value)
         setIsPrinciple(true)
      }
      else if (name =="rate"){
         setRate(value)
         setIsRate(true)
      }
      else{
         setYear(value)
         setIsYear(true)
      }
   }
   }

  const handleReset = ()=>{
   setPrinciple(0)
   setYear(0)
   setRate(0)
   setIsPrinciple(true)
   setIsRate(true)
   setIsYear(true)
   setInterest(0)
  }

  const calculate = ()=>{
   setInterest((principle*rate*year)/100)
  }

  return (
    
     <div className='d-flex justify-content-center aling-items-center' style={{width:'100',height:'100hv'}}>
     <div className='bg-light p-5 rounded' style={{width:'500px'}}>
       <h1>Simple Interest App</h1>
       <p>Calculate your simple interest Easily</p>

       <div className='mt-5 flex-column rounded shadow bg-warning d-flex justify-content-center align-items-center p-4'>
        <h2 className='fs-1 fw-bolder'>₹ {interest}</h2>
        <p>Total simple interest</p>

       </div>
       <form className='mt-5'>
        <div className="mb-3">
        <TextField id="outlined-basic" value={principle || ""}  label="₹ principle amount" name='principle' variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        {!isPrincipal &&
        <p className='text-danger'>Invalid Input</p>
        }
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" value={rate || ""}  label="Rate of Interest (p.a)%" name='rate' variant="outlined" className='w-100' onChange={(e)=>validate(e)}/>
        {!isRate &&
        <p className='text-danger'>Invalid Input</p>
         }
        </div>
        <div className="mb-3">
        <TextField id="outlined-basic" value={year || ""} label="Year (Yr)" name='year' variant="outlined" className='w-100' onChange={(e)=>validate(e)} />
        {!isYear &&
        <p className='text-danger'>Invalid Input</p>
         }
        </div>
           <div className="d-flex justify-content-between w-100 mt-4"> 
           <Button variant="contained" color="success" style={{width:'190px',height:'60px'}} disabled={isPrincipal && isRate && isYear ? false:true} onClick={calculate}>Calculate</Button>
           <Button variant="outlined" style={{width:'190px',height:'60px'}} onClick={handleReset}>Reset</Button>
           
        </div>
       </form>
    </div>

     </div>
    
  )
}

export default App
