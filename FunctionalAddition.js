import { useState } from "react"

export default function FunctionalAddition()
{
    var [a,setA] = useState(0);
    var [b,setB] = useState(0);
    var [c,setC] = useState(0);
    function setNumber1(e)
    {
   
         setA(e.target.value);
    
    }
    function setNumber2(e)
    {
   
         setB(e.target.value);
    
    }
    function calculate(e)
    {
        setC(parseInt(a)+parseInt(b));
       // alert(a);
        e.preventDefault();
    }
    return(
        <div>
                <form onSubmit={(e)=>calculate(e)}>
                <input type="text" onChange={(e)=>setNumber1(e)}  />
                <br />
                <input type="text" onChange={(e)=>setNumber2(e)}  />
                <br />                
                <input type="submit" value="click" />
                </form>
            <p>{c}</p>
        </div>)
}