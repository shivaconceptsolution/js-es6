import { useState } from "react"

const SI = () =>
{
    const[p,setP] = useState("")
    const[r,setR] = useState("")
    const[t,setT] = useState("")
    const[si,setSi] = useState("")
    var enterP = (e) =>
    {
        setP(e.target.value)
    }
    var enterR = (e) =>
    {
        setR(e.target.value)
    }
    var enterT = (e) =>
    {
        setT(e.target.value)
    }
   var calc = () =>
    {
        var res = (p*r*t)/100
        setSi(res)
    }
   return (<div>
          <input type="text" placeholder="Enter p" onChange={(e)=>enterP(e)} /> 
          <br/>
          <input type="text" placeholder="Enter r" onChange={enterR} /> 
          <br/>
          <input type="text" placeholder="Enter t" onChange={enterT} /> 
          <br/>
          <input type="button" value="Calculate" onClick={calc} /> 
          <br/>
          {si}
           </div>)
}

export default SI;