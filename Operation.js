import Addprops from "./Addprops"
import Subprops from "./Subprops"
import Multiprops from "./Multiprops"
import Divisionprops from "./Divisionprops"

export default function Operation(props)
{
    console.log(props.ope,props.num1, props.num2);
    if(props.ope=='+')
    {
       return <Addprops  />
    }
    else if(props.ope=='-')
    {
       return <Subprops />
    }
    else if(props.ope=='*')
    {
       return <Multiprops />
    }
    else if(props.ope=='/')
    {
      return  <Divisionprops />
    }
    else
    {
    return (<div>
     <p>Props Example</p>
    </div>)
    }
}
