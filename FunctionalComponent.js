import { useState } from "react";
export default function FunctionalComponent()
{
    const[a,setA] = useState(0)
    function fun()
    {
      setA(a+1)
    }
    return (<div>
        
          <input type="button" onClick={fun} value="Click" />
          <br/>
          {a}
    </div>
     
    )
}